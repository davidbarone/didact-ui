var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: { main: path.resolve('./src/index.js') },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./html/index.html",
            filename: "index.html",
        }),
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
    }
};