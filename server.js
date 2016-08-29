const express = require('express')
const port = process.env.PORT || 3000
const path = require('path')
const app = express()
const env = process.env.NODE_ENV

if (env === 'staging') {
  const basicAuth = require('basic-auth-connect')
  app.use(basicAuth(process.env.NPM_CONFIG_BASIC_AUTH_USER, process.env.NPM_CONFIG_BASIC_AUTH_PWD))
}

app.use(express.static(__dirname + '/build'))
app.get('/', function (req, res) {
  res.render('index')
})

app.listen(port, function () {
  console.log('Listening at port: ', port)
})
