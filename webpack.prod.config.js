const merge = require('webpack-merge')
const validate = require('webpack-validator')

const CONFIG = require('./config/webpack')
const APP_INFO = require('./config/app_info')
const webpack_parts = require('./config/webpack_parts')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const prodConfig = {
  context: CONFIG.app,
  entry: [
    './index.js', './styles/main.scss'],
  output: {
    path: CONFIG.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(CONFIG.build, {
      root: process.cwd()
    })
  ],
  resolve: {
    extensions: CONFIG.extensions
  }
}

const config = merge(
  prodConfig,
  webpack_parts.indexTemplate({title: APP_INFO.windowTitle, template: CONFIG.indexTemplate}),
  webpack_parts.loadJSX([CONFIG.app, CONFIG.libs]),
  webpack_parts.loadFonts([CONFIG.icons]),
  webpack_parts.loadCSS([CONFIG.icons]),
  webpack_parts.extractSCSS([CONFIG.styles])
)

module.exports = validate(config, {
  quiet: true
})
