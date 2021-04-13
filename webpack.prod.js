const Webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'svg/',
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
        }),
        new CssMinimizerPlugin(),
        new HTMLInlineCSSWebpackPlugin(),
        new HtmlWebpackInlineSVGPlugin({
            inlineAll: true,
            svgoConfig: [
                {
                    removeViewBox: false,
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: './src/favicon.png',
            favicons: {
                appName: 'infinite-supply',
                appDescription: 'Infinite Supply',
                background: '#fff',
                theme_color: '#da532c',
            },
        }),
    ],
});
