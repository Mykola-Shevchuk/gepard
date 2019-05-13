``npm install`` - install project dependencies

``npx gulp dev`` - run development server, images optimization

``npx gulp prod``- builds production ready js, css, html (with critical css) into /dist folder

src/resources/img/base64 - folder for builtIn base64 images directly in scss, example:

    background-image: #{url64('src/resources/img/base64/quote.png')};

src/resources/sprite - folder with svg-sprite images (dist/resources/sprite.svg), to inject sprite into page add next <img> element:

    <img src="resources/sprite.svg" class="svg_injectable" style="display: none" alt="">

In this project use picture tags with .webp first priority images. For images in css use <html> feature detection class 'webp'/'no-webp' 

## js

webpack.configES5.babel.js - bundles index.js with polyfills
webpack.configES5.babel.js - for index.mjs for modern browsers, without polyfills (needs server setup)