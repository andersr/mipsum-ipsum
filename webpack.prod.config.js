const merge = require('webpack-merge')
const validate = require('webpack-validator')
const CONFIG = require('./config/webpack')
const APP_INFO = require('./config/app_info')
const webpack_parts = require('./config/webpack_parts')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const prodConfig = {
  context: CONFIG.app,
  entry: [
    './index.js', './styles/main.scss'],
  output: {
    path: CONFIG.app,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(CONFIG.build, {
        root: process.cwd()
      }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: [CONFIG.app, CONFIG.libs]
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
      include: CONFIG.styles
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
      loader: 'url?limit=8192'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

const config = merge(
  prodConfig,
  webpack_parts.indexTemplate
)

module.exports = validate(config, {
  quiet: true
})
