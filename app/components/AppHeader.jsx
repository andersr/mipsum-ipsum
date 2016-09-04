import React from 'react'
import TextHeading from './TextHeading'
import Paragraph from './Paragraph'
import ClipboardBtn from './ClipboardBtn'

const AppHeader = props => {
  return (
    <header className='app-header'>
      <div className='app-header-content flex-row flex-vertical-baseline'>
        <div className='flex-main-content'>
          <TextHeading text={props.title} />
        </div>
          <Paragraph text={props.tagline} style='secondary-text brand-text' />
      </div>
      <div className='flex-row flex-centered flex-vertical-middle'>

         <ClipboardBtn clipboardText={props.textBlocks} />
        </div>

    </header>
  )
}

// &.flex-centered {
//    justify-content: center;
// }
// &.flex-vertical-middle {
//   align-items: center;
// }

AppHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  tagline: React.PropTypes.string,
  textBlocks: React.PropTypes.string
}

export default AppHeader
