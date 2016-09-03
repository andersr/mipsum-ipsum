import React from 'react'
import AppHeader from './AppHeader'
import List from '../components/List'

const App = props => {
  return (
    <div id='app-container'>
    <AppHeader
      title={props.staticContent.appTitle}
      tagline={props.staticContent.appTagline} />
      <div id='main-content'>
        <List listItems={props.textBlocks} />
      </div>
    </div>
  )
}

export default App

App.propTypes = {
  staticContent: React.PropTypes.object,
  textBlocks: React.PropTypes.array
}

//
// <AppHeader
//   title={props.staticContent.appTitle}
//   tagline={props.staticContent.appTagline} />
