import React from 'react'
import AppHeader from './AppHeader'
// import List from '../components/List'
import Btn from './Btn'
import Icon from '../components/Icon'
import MultilineInput from '../components/MultilineInput'

const App = props => {
  const plusIcon = <Icon icon='octicon-plus' style='icon--lg' />

  return (
    <div className='app-container'>
    <AppHeader
      {...props}
      title={props.staticContent.appTitle}
      tagline={props.staticContent.appTagline} />
      <div id='lipsumBlocks' className='main-content'>
      <MultilineInput content={props.textBlocks} />
      </div>
      <div className='app-footer'>
        <div className='add-button'>
          <Btn icon={plusIcon} isRound={true} inverted={true} dropShadow={true} handleClick={props.addTextBlock} />
        </div>
    </div>
    </div>
  )
}

App.propTypes = {
  staticContent: React.PropTypes.object,
  textBlocks: React.PropTypes.string,
  addTextBlock: React.PropTypes.func,
  listItems: React.PropTypes.array
}

export default App
