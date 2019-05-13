import path from "path";
//import webpack from "webpack";
//import UglifyJsPlugin  from "uglifyjs-webpack-plugin";

export default {
    output: { 
        filename: "index.mjs"
    },
//    mode: "none",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env", {
                                    useBuiltIns: "entry",
                                    targets: {
                                        "esmodules": true
                                    },
                                }
                            ],
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            "@comp": path.resolve(__dirname, "src/js/components"),
            "@js": path.resolve(__dirname, "src/js/")
        },
        extensions: ['.js'],
        modules: [
            'node_modules/',
            'src/js/plugins/',
        ],
    }
}