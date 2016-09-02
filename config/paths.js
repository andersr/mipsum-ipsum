const path = require('path')

module.exports = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
  devEntry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './index.js', './styles/main.scss'],
  indexTemplate: path.join(__dirname, '../app/templates/index.ejs'),
  libs: path.join(__dirname, '../libs'),
  styles: path.join(__dirname, '../app/styles/main.scss')
}
