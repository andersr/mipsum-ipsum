const path = require('path')
// const parts = require('./libs/parts')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  context: path.join(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      template: path.join(__dirname, 'app/templates/index.ejs'),
      inject: 'body',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(path.join(__dirname, 'app'), {
        root: process.cwd()
      })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }]
  }
}
module.exports = config
