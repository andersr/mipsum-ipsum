import React from 'react'
import AppHeader from './AppHeader'
import TextHeading from './TextHeading'
import LipsumListContainer from '../containers/LipsumListContainer'
import STATIC_TEXT from '../../libs/static_text'
import LATIN_WORDS from '../../libs/latin_words'
// import Octicon from 'react-octicon'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div id='app-container'>
        <AppHeader title={STATIC_TEXT.appInfo.title} tagline={STATIC_TEXT.appInfo.tagline} />
        <LipsumListContainer lipsumData={LATIN_WORDS} />
      </div>
    )
  }
}
