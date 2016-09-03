import React from 'react'
import AppHeader from './AppHeader'
import List from '../components/List'

const App = props => {
  return (
    <div id='app-container'>
    <AppHeader
      {...props}
      title={props.staticContent.appTitle}
      tagline={props.staticContent.appTagline} />
      <div id='main-content'>
        <List listItems={props.listItems} />
      </div>
    </div>
  )
}

App.propTypes = {
  staticContent: React.PropTypes.object,
  textBlocks: React.PropTypes.string,
  listItems: React.PropTypes.array
}

export default App
