const path = require('path')

module.exports = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
  indexTemplate: path.join(__dirname, '../app/templates/index.ejs'),
  libs: path.join(__dirname, '../libs'),
  styles: path.join(__dirname, '../app/styles/main.scss'),
  icons: path.join(__dirname, '../node_modules/react-octicon'),
  extensions: ['', '.js', '.jsx']
}
