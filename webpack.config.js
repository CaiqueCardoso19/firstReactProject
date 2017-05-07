const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './build.js'
    },
    devServer: {
        port: 8081,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
                preset: ['es2015', 'react']
            }
        }]
    }
}