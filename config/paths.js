const path = require('path')

module.exports = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
  fonts: path.join(__dirname, '../node_modules/react-octicon/node_modules/octicons/octicons'),
  extensions: ['', '.js', '.jsx'],
  faviconFiles: path.join(__dirname, '../assets/faviconFiles'),
  indexTemplate: path.join(__dirname, '../app/templates/index.ejs'),
  libs: path.join(__dirname, '../libs'),
  styles: path.join(__dirname, '../app/styles/main.scss'),
  icons: path.join(__dirname, '../node_modules/react-octicon'),
  vendor: ['react']
}
