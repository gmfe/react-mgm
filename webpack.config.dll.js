const webpackConfigDll = require('gm-webpack/webpack.config.dll.js')

const config = webpackConfigDll({
  publicPath: '/react-mgm/build/',
  dll: [
    'react', 'react-dom', 'prop-types',
    'classnames',
    'react-router', 'react-router-dom',
    'history', 'query-string',
    'lodash', 'moment',
    'gm-util',
    'big.js'
  ]
})

module.exports = config
