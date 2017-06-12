/**
 * Created by zou hang on 2017/3/6.
 */

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            "ng-annotate-loader"
        ]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            "babel-loader"
        ]
    },
    {
        test: /\.html/,
        exclude: /node_modules/,
        use: [
            "raw-loader"
        ]
    },
    {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader'
                }
            ]
        })
    },
    {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [

                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        })
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:6].[ext]'
                }
            }
        ]
    },
    {
        test: /\.(woff|svg|eot|ttf|woff2)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    }
]