import React from 'react'
import AppHeader from './AppHeader'
// import List from '../components/List'
import Btn from './Btn'
import Icon from '../components/Icon'
import MultilineInput from '../components/MultilineInput'

const App = props => {
  const plusIcon = <Icon icon='octicon-plus' style='icon--lg' />
  const clearIcon = <Icon icon='octicon-x' />
  const clearBtn = <div className='app-footer-left'><Btn icon={clearIcon} isRound inverted dropShadow handleClick={props.addTextBlock} /></div>

  return (
    <div className='app-container'>
    <AppHeader
      {...props}
      title={props.staticContent.appTitle}
      tagline={props.staticContent.appTagline} />
      <div id='lipsumBlocks' className='main-content flex-column'>
        <MultilineInput content={props.textBlocks} />
        <div className='app-footer-container'>
          <div className='app-footer'>
            {props.paragraphCount > 1 ? clearBtn : null}
            <div className='app-footer-center flex-main-content'>
              <Btn icon={plusIcon} isRound inverted dropShadow handleClick={props.addTextBlock} />
            </div>
          </div>
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
