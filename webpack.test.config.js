var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "bundle[chunkHash].css",
    disable: false,
    allChunks: true
});
var extractCss = new ExtractTextPlugin({
    filename: "vendor[chunkHash].css",
    disable: false
});

module.exports = {
    entry: {
        app: './tests/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][chunkHash].js',
        library: 'index',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: [
                path.resolve(__dirname, 'index.ts'),
                path.resolve(__dirname, 'ane-util.ts'),
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'tests')
            ],
            loader: 'ts-loader'
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, 'styles'),
                path.resolve(__dirname, 'components')
            ],
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'node_modules')
            ],
            use: extractCss.extract({
                use: [{
                    loader: 'css-loader'
                }]
            })
        }, {
            test: /\.html$/,
            include: [
                path.resolve(__dirname, 'components')
            ],
            loader: 'raw-loader'
        }, {
            test: /\.(eot|otf|ttf|woff|woff2|svg)\w*/,
            include: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'file-loader',
            query: {
                limit: 1,
                name: '[name].[ext]'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.scss']
    },
    plugins: [
        extractSass,
        extractCss,
        new HtmlWebpackPlugin({
            template: 'tests/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchOptions: {
            ignored: /node_modules/
        }
    }
};