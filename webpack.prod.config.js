const path = require('path')
// const merge = require('webpack-merge')
const validate = require('webpack-validator')
// const parts = require('./libs/parts')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app/styles/main.scss')
}

const config = {
  context: path.join(__dirname, 'app'),
  entry: [
    './index.js', './styles/main.scss'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Morem Ipsum - One-click Lorem Ipsum',
      template: path.join(__dirname, 'app/templates/index.ejs'),
      inject: 'body',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(path.join(__dirname, 'build'), {
        root: process.cwd()
      }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'app'), path.join(__dirname, 'libs')]
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass'),
      include: PATHS.style
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
module.exports = validate(config, {
  quiet: true
})
