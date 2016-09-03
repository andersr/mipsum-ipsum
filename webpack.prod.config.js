const webpack = require('webpack')
const merge = require('webpack-merge')
const validate = require('webpack-validator')

const PATHS = require('./config/paths')
const STATIC_CONTENT = require('./libs/static_content')
const webpack_parts = require('./config/webpack_parts')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prodConfig = {
  entry: {
    app: PATHS.app,
    styles: PATHS.styles,
    vendor: PATHS.vendor
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.build, {
      root: process.cwd()
    }),
    new CopyWebpackPlugin([{from: PATHS.faviconFiles, to: PATHS.build}]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: PATHS.extensions
  }
}

const config = merge(
  prodConfig,
  {
    devtool: 'cheap-module-source-map'
  },
  webpack_parts.indexTemplate({title: STATIC_CONTENT.windowTitle, template: PATHS.indexTemplate}),
  webpack_parts.loadJSX([PATHS.app, PATHS.libs]),
  webpack_parts.loadFonts([PATHS.icons]),
  webpack_parts.loadCSS([PATHS.icons]),
  webpack_parts.extractSCSS([PATHS.styles]),
  webpack_parts.purifyCSS([PATHS.app]),
  // webpack_parts.favicons(PATHS.favicon),
  webpack_parts.minify()
)

module.exports = validate(config, {
  quiet: true
})

// [
//   './index.js', './styles/main.scss']
