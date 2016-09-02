const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CONFIG = require('./webpack')
const APP_INFO = require('./app_info')

exports.indexTemplate = function () {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: APP_INFO.windowTitle,
        template: CONFIG.indexTemplate,
        inject: 'body',
        filename: 'index.html'
      })
    ]
  }
}

exports.loadJSX = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: paths
        }
      ]
    }
  }
}

exports.loadCSS = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css',
          include: paths
        }
      ]
    }
  }
}

exports.loadSCSS = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: paths
        }
      ]
    }
  }
}

exports.loadFonts = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
          loader: 'url?limit=8192',
          include: paths
        }
      ]
    }
  }
}


// new HtmlWebpackPlugin({
//   template: require('html-webpack-template'),
//   title: options.title,
//   appMountId: options.appMountId,
//   inject: false
// })
