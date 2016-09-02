const webpack = require('webpack')
const CONFIG = require('./webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.indexTemplate = function (options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: options.title,
        template: options.template,
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

exports.extractSCSS = function (paths) {
  return {
    plugins: [
      new ExtractTextPlugin('[name].css')
    ],
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
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

// exports.copyFiles = function ({ from: 'source', to: 'dest' }) {
//   return {
//     plugins: [
//       new CopyWebpackPlugin({ from: 'source', to: 'dest' }, options)
//     ]
//   }
// }

exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
}

// new HtmlWebpackPlugin({
//   template: require('html-webpack-template'),
//   title: options.title,
//   appMountId: options.appMountId,
//   inject: false
// })
