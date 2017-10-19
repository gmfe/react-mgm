const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isPro = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        'index': [
            './demo/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash:8].js',
        publicPath: isPro ? '/react-mgm/build/' : '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.(css|less)$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]
        }, {
            test: /iconfont\.(woff|woff2|ttf|eot|svg)($|\?)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 0,
                    name: 'fonts/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.template'
        })
    ],
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8082',
                secure: false
            }
        }
    }
};

module.exports = config;