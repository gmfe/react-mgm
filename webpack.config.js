const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

const config = {
    entry: {
        'index': [
            './demo/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/react-mgm/build/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.(css|less)$/,
            use: [
                'style-loader',
                'css-loader?-autoprefixer',
                'postcss-loader',
                'less-loader'
            ]
        }, {
            test: /iconfont\.(woff|woff2|ttf|eot|svg)($|\?)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'fonts/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
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