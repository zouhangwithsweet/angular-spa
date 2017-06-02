var webpack = require('webpack'),
    rules = require('./../conf/rules'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log('webpack开始工作----');

module.exports = {
    entry: {
        app: ['./src/app/app.js'],
        vendors: ['angular', 'angular-ui-router', 'angular-ui-bootstrap', 'oclazyload']
    },
    output: {
        path: __dirname + '/dev',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:6].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            static: path.resolve(__dirname, '../src/static')
        }
    },
    module: {
        rules: rules,
        exprContextCritical: false
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'js/vendors.js'
        }),
        new ExtractTextPlugin({
            'filename': 'css/combine.css'
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                drop_console: true,
                drop_debugger: true,
                warnings: false
            },
            output: {
                comments: false,
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
            }
        })
    ]
};