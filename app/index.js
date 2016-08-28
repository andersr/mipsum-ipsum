// require('react')
// var component = require('./component')
// document.body.appendChild(component())


import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
//
// if (process.env.NODE_ENV !== 'production') {
//   React.Perf = require('react-addons-perf')
// }

ReactDOM.render(<App />, document.getElementById('app'))
