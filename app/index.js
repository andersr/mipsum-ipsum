import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lipsumApp from './reducers'
import AppContainer from './containers/AppContainer'
import LATIN_WORDS from '../libs/latin_words'

const STATIC_CONTENT = require('../libs/static_content')

let store = createStore(lipsumApp)

ReactDOM.render(
  <Provider store={store}>
  <AppContainer staticContent={STATIC_CONTENT} sourceWords={LATIN_WORDS} />
  </Provider>
  , document.getElementById('app'))
