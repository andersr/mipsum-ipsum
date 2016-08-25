const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const validate = require('webpack-validator')
const parts = require('./libs/parts')
const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app/styles/main.scss'),
  build: path.join(__dirname, 'build'),
  template: path.join(__dirname, 'app/templates/my_template.ejs')
}

const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      template: PATHS.template
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

let config

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          publicPath: '/webpack-demo/',
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
        },
        resolve: {
          alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite'
          }
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
       'process.env.NODE_ENV',
       'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.extractSCSS(PATHS.style),
      // webpack is aware of PATHS.app so this arg is technically not needed but good to be explicit
      parts.purifyCSS([PATHS.app])
    )

    break
  default:
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.setupSCSS(PATHS.style),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    )
}

module.exports = validate(config, {
  quiet: true
})
