// const path = require('path')
const webpack = require('webpack')
const PATHS = require('./config/paths')
const validate = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// console.log("PATHS: ", PATHS)

var config = {
  context: PATHS.app,
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js', './styles/main.scss'],
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Morem Ipsum - One-click Lorem Ipsum',
      template: PATHS.indexTemplate,
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: [PATHS.app, PATHS.libs]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [ PATHS.styles ]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
module.exports = validate(config, {
  quiet: true
})
