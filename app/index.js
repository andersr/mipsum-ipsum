import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import LATIN_WORDS from '../libs/latin_words'

const STATIC_CONTENT = require('../libs/static_content')

ReactDOM.render(<AppContainer staticContent={STATIC_CONTENT} sourceWords={LATIN_WORDS} minWords={40} maxWords={50} />, document.getElementById('app'))
