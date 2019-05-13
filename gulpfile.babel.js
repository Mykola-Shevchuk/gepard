import gulp         from 'gulp';
const series =      gulp.series;
const parallel =    gulp.parallel;
import gulpif       from 'gulp-if';

import htmlmin      from 'gulp-htmlmin';
import sass         from 'gulp-sass';
import sourcemaps   from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS     from 'gulp-clean-css';
import critical     from 'critical';
import browserSync  from 'browser-sync';
//import notify from 'gulp-notify';

import svgSprite    from 'gulp-svg-sprite';
import svgmin       from 'gulp-svgmin';
import cheerio      from 'gulp-cheerio';
import replace      from 'gulp-replace';

import cache        from 'gulp-cache';
import imagemin     from 'gulp-imagemin';
import del          from 'del';
import uglify       from 'gulp-uglify';
import path         from 'path';
import named        from 'vinyl-named';
import webpack      from 'webpack-stream';

import webpackConfigES5     from './webpack.configES5.babel';
import webpackConfigES2015  from './webpack.configES2015.babel';

var src = {
    root: 'src/',
	html: 'src/*.html',
	sass: 'src/sass/**/*.+(scss|sass)',
//    sassModules: [],
	js: 'src/js/**/*.js',
	jsPlugins: 'src/js/plugins/*.js',
	jsEntries: 'src/js/*.js',
    resources: 'src/resources/',
    fonts: 'src/resources/fonts/**/*.*',
	img: 'src/resources/img/**/*.+(png|jpg|gif|svg|ico|webp)',
	sprite: 'src/resources/sprite/*.svg',
};

//src.sassModules = src.sassModules.map(function(path){return src.nodeModules + path});
	
var dist = {
    root: 'dist/',
	css: 'dist/css/',
	js: 'dist/js/',
    resources: 'dist/resources/',
    fonts: 'dist/resources/fonts/',
	img: 'dist/resources/img/',
//	sprite: 'img/sprite/',
};

gulp.task('set-dev-node-env', (done) => {
    process.env.NODE_ENV = 'development';
    done();
});

gulp.task('set-prod-node-env', (done) => {
    process.env.NODE_ENV = 'production';
    done();
});

/* ----- inline-image(pathToFile) ----- */
function sassFunctions(options) {
  options = options || {};
  options.base = options.base || process.cwd();

  var fs        = require('fs');
  var path      = require('path');
  var types     = require('node-sass').types;

  var funcs = {};

  funcs['url64($file)'] = function(file, done) {
    var file = path.resolve(options.base, file.getValue());
    var ext  = file.split('.').pop();
    ext = (ext === 'svg') ? 'svg+xml' : ext;
    fs.readFile(file, function(err, data) {
      if (err) return done(err);
      data = new Buffer(data);
      data = data.toString('base64');
      data = 'url(data:image/' + ext + ';base64,' + data + ')';
      data = types.String(data);
      done(data);
    });
  };

  return funcs;
}

gulp.task('sass', () =>
	gulp.src(src.sass)
		.pipe(sourcemaps.init())
			.pipe(sass({
				includePaths: ['node_modules'],
                functions: sassFunctions()
			}).on('error', sass.logError))
			.pipe(autoprefixer())
			// .pipe(autoprefixer(['last 10 major versions', "Firefox > 20", '> 0.1%', 'ie 10-11']))
			.pipe(gulpif(process.env.NODE_ENV === 'production', cleanCSS()))
	    .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dist.css))
		.pipe(browserSync.stream())
);

gulp.task('html', () => 
    gulp.src(src.html)
    // .pipe(gulpif(process.env.NODE_ENV === 'production', htmlmin({ 
        // collapseWhitespace: true ,
        // removeComments: true
    // })))
    .pipe(gulp.dest(dist.root))
)

// Generate & Inline Critical-path CSS
gulp.task('critical', () => 
    gulp.src(dist.root + '*.html')
    .pipe(critical.stream({
        inline: true,
        minify: true,
        base: 'dist/',
        
        dimensions: [
            {
              width: 320,
              height: 823,
            },
            {
              width: 768,
              height: 1024,
            },
            {
              width: 1024,
              height: 1366,
            },
            {
              width: 1280,
              height: 1440,
            },
        ]
    }))
    .pipe(gulp.dest(dist.root))
)

gulp.task('fonts', () =>
	gulp.src(src.fonts)
    .pipe(gulp.dest(dist.fonts))
)
    
gulp.task('img', () =>
	gulp.src(src.img)
		.pipe(cache(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false},
					{cleanupAttrs: false}
				]
			})
		], 
		{
			verbose: true
		})))
		.pipe(gulp.dest(dist.img))
)

gulp.task('sprite', () =>
    gulp.src(src.sprite)
	// minify svg
    .pipe(svgmin({
        js2svg: {
            pretty: true
        }
    }))
    // remove all fill, style and stroke declarations in out shapes
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
    }))
    // cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: "../sprite.svg",
                render: {
//                    scss: {
//                        dest:'../../sass/partials/_sprite.scss',
//                        template: src.resources + "sprite/_sprite_template.scss"
//                    }
                }
            }
        }
    }))
    .pipe(gulp.dest(src.resources))
);

gulp.task('sassGenerators', series('sprite'));
gulp.task('resources', series(parallel('fonts', 'img', 'sassGenerators'), () =>
    gulp.src(src.resources + "*.*")
        .pipe(gulp.dest(dist.resources))
));

gulp.task('js-es5', () =>
    gulp.src(src.jsEntries)
        .pipe(named())
        .pipe(webpack(webpackConfigES5))
        .pipe(gulp.dest(dist.js))
);
gulp.task('js-es2015', () =>
    gulp.src(src.jsEntries)
        .pipe(named())
        .pipe(webpack(webpackConfigES2015))
        .pipe(gulp.dest(dist.js))
);    
gulp.task('js', series('js-es5', 'js-es2015'));
	
gulp.task('serve', () => {
	browserSync({
		server: {
			baseDir: dist.root
		},
		port: 9000,
		logPrefix: "browserSync"
	});
	gulp.watch(src.sass, series('sass')).on('change', browserSync.reload);
	gulp.watch(src.html, series('html')).on('change', browserSync.reload);
	gulp.watch(src.js, series('js')).on('change', browserSync.reload);
	gulp.watch(src.fonts, series('fonts')).on('change', browserSync.reload);
	gulp.watch(src.img, series('img')).on('change', browserSync.reload);
	gulp.watch(src.sprite, series('sprite', 'sass')).on('change', browserSync.reload);
});

gulp.task('cleanCache', () => cache.clearAll() );
gulp.task('del', () =>
    del(dist.root).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    })
);
gulp.task('clean', parallel('cleanCache', 'del'))

gulp.task('sassUpdate', series('resources', 'sass'));
gulp.task('build', parallel('resources', 'sassUpdate', 'js', 'html'));

gulp.task('prod', series('set-prod-node-env', 'clean', 'build', 'critical'));
gulp.task('dev', series('set-dev-node-env', 'build', 'serve'));
gulp.task('default', series('dev'));