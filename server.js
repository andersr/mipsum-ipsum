const express = require('express')
const port = (process.env.PORT || 3000)
const path = require('path')
const app = express()
const env = process.env.NODE_ENV

if (env === 'staging') {
  const basicAuth = require('basic-auth-connect')
  app.use(basicAuth(process.env.NPM_CONFIG_BASIC_AUTH_USER, process.env.NPM_CONFIG_BASIC_AUTH_PWD))
}

if (env === 'staging' || env === 'production') {
  app.use(express.static(__dirname + '/build'))
  app.get('/', function (req, res) {
    res.render('index')
  })
} else {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('./webpack.dev.config.js')
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    },
    historyApiFallback: true
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))

  app.get('*', function response (req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')))
    res.end()
  })
}

app.listen(port, function () {
  console.log('Listening at port: ', port)
})
