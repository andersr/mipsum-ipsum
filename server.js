var express = require('express')
var port = (process.env.PORT || 3000)
var path = require('path')
var app = express()

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var webpackDevMiddleware = require("webpack-dev-middleware");
  var webpackHotMiddleware = require("webpack-hot-middleware");
  var webpackConfig = require('./webpack.dev.config.js');
  var compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    },
    historyApiFallback: true
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));

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
  app.get('*', function response (req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')))
    res.end()
  })

} else {

  app.use(express.static(__dirname + '/build'));
  app.get('/', function (req, res) {
	  res.render('index')
  })

//   var indexPath = path.join(__dirname, 'index.html')
//   var publicPath = express.static(path.join(__dirname, 'build'))
//
// app.use('/public', publicPath)
// app.get('/', function (_, res) { res.sendFile(indexPath) })
//
}

var server = app.listen(port, function () {
  // var host = server.address().address
  // console.log('Server:', server.address())
  // var port = server.address().port;
  console.log('Listening at port: ', port)
})
