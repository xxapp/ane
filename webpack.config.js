var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractLess = new ExtractTextPlugin({
    filename: "ane.css",
    disable: false
});
var extractLayoutLess = new ExtractTextPlugin({
    filename: "layout.css",
    disable: false
});

module.exports = {
    entry: {
        ane: './index.ts',
        layout: './components/ms-layout/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    externals: {
        avalon2: {
            root: 'avalon',
            commonjs: 'avalon2',
            commonjs2: 'avalon2',
            amd: 'avalon2'
        },
        jquery: {
            root: '$',
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery'
        },
        'async-validator': {
            root: 'Schema',
            commonjs: 'async-validator',
            commonjs2: 'async-validator',
            amd: 'async-validator'
        },
        bootbox: {
            root: 'bootbox',
            commonjs: 'bootbox',
            commonjs2: 'bootbox',
            amd: 'bootbox'
        },
        'dom-align': {
            root: 'domAlign',
            commonjs: 'dom-align',
            commonjs2: 'dom-align',
            amd: 'dom-align'
        },
        moment: true,
        noty: {
            root: 'noty',
            commonjs: 'noty',
            commonjs2: 'noty',
            amd: 'noty'
        },
        'up-loader': {
            root: 'Uploader',
            commonjs: 'up-loader',
            commonjs2: 'up-loader',
            amd: 'up-loader'
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: [
                path.resolve(__dirname, 'index.ts'),
                path.resolve(__dirname, 'ane-util.ts'),
                path.resolve(__dirname, 'components')
            ],
            loader: 'ts-loader'
        }, {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, 'styles'),
                path.resolve(__dirname, 'components')
            ],
            exclude: [
                path.resolve(__dirname, 'components/ms-layout')
            ],
            use: extractLess.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, 'styles'),
                path.resolve(__dirname, 'components/ms-layout')
            ],
            use: extractLayoutLess.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'components'),
                path.resolve(__dirname, 'node_modules')
            ],
            use: extractLess.extract({
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
            test: /\.(eot|otf|ttf|woff|woff2|svg|png|gif)\w*/,
            include: [
                path.resolve(__dirname, 'components'),
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
        mainFields: ['browser', 'main'],
        extensions: ['.js', '.ts', '.less']
    },
    plugins: [
        extractLess,
        extractLayoutLess
    ]
};