var express = require('express')
var port = (process.env.PORT || 3000)
var path = require('path')
var app = express()
var env = process.env.NODE_ENV;

// console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)

if (env === 'staging') {
  var basicAuth = require('basic-auth-connect');
  app.use(basicAuth(process.env.NPM_CONFIG_BASIC_AUTH_USER, process.env.NPM_CONFIG_BASIC_AUTH_PWD));
  
  app.use(express.static(__dirname + '/build'));
  app.get('/', function (req, res) {
    res.render('index')
  })

} else if (env == 'production') {
  app.use(express.static(__dirname + '/build'));
  app.get('/', function (req, res) {
    res.render('index')
  })
} else {
  var webpack = require('webpack')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var webpackConfig = require('./webpack.dev.config.js');
  var compiler = webpack(webpackConfig)
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

  app.use(middleware);
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

var server = app.listen(port, function () {
  console.log('Listening at port: ', port)
})

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/assets/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));


// app.get('/', function (req, res) {
//   res.send('<body>Hello World<script src=\'assets/bundle.js\'></script></body>');
// });
