const webpack = require('webpack')
const merge = require('webpack-merge')
const CONFIG = require('./config/webpack')
const APP_INFO = require('./config/app_info')
const webpack_parts = require('./config/webpack_parts')
const validate = require('webpack-validator')

const devConfig = {
  context: CONFIG.app,
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js', './styles/main.scss'],
  output: {
    path: CONFIG.build,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: CONFIG.extensions
  }
}

const config = merge(
  devConfig,
  webpack_parts.indexTemplate({title: APP_INFO.windowTitle, template: CONFIG.indexTemplate}),
  webpack_parts.loadJSX([CONFIG.app, CONFIG.libs]),
  webpack_parts.loadFonts([CONFIG.icons]),
  webpack_parts.loadCSS([CONFIG.icons]),
  webpack_parts.loadSCSS([CONFIG.styles])
)

module.exports = validate(config, {
  quiet: true
})
