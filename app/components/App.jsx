import React from 'react'
import Header from './Header'
import LipsumListContainer from '../containers/LipsumListContainer'
import STATIC_TEXT from '../../libs/static_text'
import LATIN_WORDS from '../../libs/latin_words'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div id="app-container">
        <Header title={STATIC_TEXT.appInfo.title} />
        <LipsumListContainer lipsumData={LATIN_WORDS} />
      </div>
    );
  }
}
