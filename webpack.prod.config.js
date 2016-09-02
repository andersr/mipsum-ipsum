const webpack = require('webpack')
const merge = require('webpack-merge')
const validate = require('webpack-validator')

const CONFIG = require('./config/webpack')
const APP_INFO = require('./config/app_info')
const webpack_parts = require('./config/webpack_parts')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prodConfig = {
  entry: {
    app: CONFIG.app,
    styles: CONFIG.styles,
    vendor: CONFIG.vendor
  },
  output: {
    path: CONFIG.build,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(CONFIG.build, {
      root: process.cwd()
    }),
    new CopyWebpackPlugin([{from: CONFIG.faviconFiles, to: CONFIG.build}]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: CONFIG.extensions
  }
}

const config = merge(
  prodConfig,
  {
    devtool: 'cheap-module-source-map'
  },
  webpack_parts.indexTemplate({title: APP_INFO.windowTitle, template: CONFIG.indexTemplate}),
  webpack_parts.loadJSX([CONFIG.app, CONFIG.libs]),
  webpack_parts.loadFonts([CONFIG.icons]),
  webpack_parts.loadCSS([CONFIG.icons]),
  webpack_parts.extractSCSS([CONFIG.styles]),
  // webpack_parts.favicons(CONFIG.favicon),
  webpack_parts.minify()
)

module.exports = validate(config, {
  quiet: true
})

// [
//   './index.js', './styles/main.scss']
