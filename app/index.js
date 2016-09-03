import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import STATIC_CONTENT from '../../libs/static_content'
import LATIN_WORDS from '../../libs/latin_words'

ReactDOM.render(<AppContainer staticContent={STATIC_CONTENT} sourceWords={LATIN_WORDS} />, document.getElementById('app'))
