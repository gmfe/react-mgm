var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: './src/index',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'underscore': 'underscore',
        'classnames': 'classnames'

    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-mgm.js',
        library: 'ReactMGM',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.css', '.less']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('react-mgm.css')
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss!less')
        }]
    },
    postcss: function () {
        return [autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}), precss];
    }
};
