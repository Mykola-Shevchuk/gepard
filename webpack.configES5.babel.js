import path from "path";
//import webpack from "webpack";
//import UglifyJsPlugin  from "uglifyjs-webpack-plugin";

export default {
//    mode: "none",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: 'babel-loader',
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