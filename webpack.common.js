const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    },
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
    ],
};
