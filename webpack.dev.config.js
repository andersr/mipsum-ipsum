var path = require('path')
var webpack = require('webpack')
const validate = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  style: path.join(__dirname, 'app/styles/main.scss'),
  icons: path.join(__dirname, 'node_modules/octicons/index.scss')
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
      title: 'Morem Ipsum - One-click Lorem Ipsum',
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
        include: [path.join(__dirname, 'app'), path.join(__dirname, 'libs')]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [ PATHS.style, PATHS.icons ]
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
