const webpack = require('webpack')
const merge = require('webpack-merge')
const PATHS = require('./config/paths')
const STATIC_CONTENT = require('./libs/static_content')
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
  resolve: {
    extensions: PATHS.extensions
  }
}

const config = merge(
  devConfig,
  webpack_parts.indexTemplate({title: STATIC_CONTENT.windowTitle, template: PATHS.indexTemplate}),
  webpack_parts.loadJSX([PATHS.app, PATHS.libs]),
  webpack_parts.loadFonts([PATHS.icons]),
  webpack_parts.loadCSS([PATHS.icons, PATHS.alerts, PATHS.alerts_jelly]),
  webpack_parts.loadSCSS([PATHS.styles])
)

module.exports = validate(config, {
  quiet: true
})
