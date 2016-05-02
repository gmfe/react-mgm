var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
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
    plugins: [
        new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.(css|less)$/,
            loader: 'style!css!postcss!less'
        }, {
            test: /iconfont\.(woff|woff2|ttf|eot|svg)($|\?)/,
            loader: 'url?limit=1024&name=[name].[ext]'
        }],
        noParse: [
            // 'react/dist/react.min.js',
            // 'react-dom/dist/react-dom.min.js',
            'react-router/umd/ReactRouter.min.js',
            'redux/dist/redux.min.js',
            'react-redux/dist/react-redux.min.js',
            'underscore/underscore-min.js'
        ]
    },
    resolve: {
        alias: {
            // react 没法加速build，因为react-addons-css-transition-group
            // 'react': 'react/dist/react.min.js',
            // 'react-dom': 'react-dom/dist/react-dom.min.js',
            'react-router': 'react-router/umd/ReactRouter.min.js',
            'redux': 'redux/dist/redux.min.js',
            'react-redux': 'react-redux/dist/react-redux.min.js',
            'underscore': 'underscore/underscore-min.js'
        }
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8082',
                secure: false
            }
        }
    }
};
