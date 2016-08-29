var path = require('path')
var webpack = require('webpack')
const validate = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin')

// var PATHS = {
//   template: path.join(__dirname, 'app/templates/index.ejs')
// }


var config = {
  context: path.join(__dirname, 'app'),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      template: path.join(__dirname, 'app/templates/index.ejs'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'app')
    }]
  }
}
module.exports = validate(config, {
  quiet: true
})
