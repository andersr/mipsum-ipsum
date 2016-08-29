const express = require('express')
const port = 3000
const path = require('path')
const app = express()
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

app.listen(port, function () {
  console.log('Listening at port: ', port)
})
