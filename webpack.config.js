const webpackConfig = require('gm-webpack/webpack.config.js')

const config = webpackConfig({
  publicPath: '/react-mgm/build/',
  port: 4000,
  projectShortName: 'index',
  index: './demo/index.js',
  commons: [
    'gm-util'
  ]
})

module.exports = config
