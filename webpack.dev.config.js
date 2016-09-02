const webpack = require('webpack')
const merge = require('webpack-merge')
const PATHS = require('./config/paths')
const APP_INFO = require('./config/app_info')
const webpack_parts = require('./config/webpack_parts')
const validate = require('webpack-validator')

const devConfig = {
  context: PATHS.app,
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js', './styles/main.scss'],
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
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

const config = merge(
  devConfig,
  webpack_parts.indexTemplate
)

module.exports = validate(config, {
  quiet: true
})
