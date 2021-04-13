const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    target: 'web',
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        inline: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackInlineSVGPlugin({
            inlineAll: true,
            runPreEmit: true,
            svgoConfig: [
                {
                    removeViewBox: false,
                },
            ],
        }),
    ],
});
