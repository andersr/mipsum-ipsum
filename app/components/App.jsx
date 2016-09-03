import React from 'react'
import AppHeader from './AppHeader'
import LipsumListContainer from '../containers/LipsumListContainer'
import STATIC_TEXT from '../../libs/static_text'
import LATIN_WORDS from '../../libs/latin_words'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='app-container'>
        <AppHeader title={STATIC_TEXT.appInfo.title} tagline={STATIC_TEXT.appInfo.tagline} />
        <div id='main-content'>
        <LipsumListContainer lipsumData={LATIN_WORDS} />
        </div>
      </div>
    )
  }
}
