const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = require('./paths')
const APP_INFO = require('./app_info')

exports.indexTemplate = {
    plugins: [
      new HtmlWebpackPlugin({
        title: APP_INFO.windowTitle,
        template: PATHS.indexTemplate,
        inject: 'body',
        filename: 'index.html'
      })
    ]
  }

// new HtmlWebpackPlugin({
//   title: APP_INFO.windowTitle,
//   template: PATHS.indexTemplate,
//   inject: 'body',
//   filename: 'index.html'
// }),

// new HtmlWebpackPlugin({
//   template: require('html-webpack-template'),
//   title: options.title,
//   appMountId: options.appMountId,
//   inject: false
// })
