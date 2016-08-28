var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    publicPath: '/assets/',
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
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}
module.exports = config
