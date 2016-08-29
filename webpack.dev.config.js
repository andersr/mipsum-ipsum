var path = require('path')
var webpack = require('webpack')
const validate = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  style: path.join(__dirname, 'app/styles/main.scss')
}

var config = {
  context: path.join(__dirname, 'app'),
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js', './styles/main.scss']
  ,
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
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
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS.style
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
