var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "ane.css",
    disable: false
});

module.exports = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ane.js',
        library: 'ane',
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
        moment: {
            root: 'moment',
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment'
        },
        noty: {
            root: 'noty',
            commonjs: 'noty',
            commonjs2: 'noty',
            amd: 'noty'
        },
        'up-loader': {
            root: 'Uploader',
            commonjs: 'noty',
            commonjs2: 'noty',
            amd: 'noty'
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: [
                path.resolve(__dirname, 'index.ts'),
                path.resolve(__dirname, 'ane-util.ts'),
                path.resolve(__dirname, 'components/ms-select'),
                path.resolve(__dirname, 'components/ms-trigger'),
                path.resolve(__dirname, 'components/ms-form/ms-control.ts'),
                path.resolve(__dirname, 'components/ms-form/utils.ts')
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
            test: /\.html$/,
            include: [
                path.resolve(__dirname, 'components')
            ],
            loader: 'raw-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.scss']
    },
    plugins: [
        extractSass
    ]
};