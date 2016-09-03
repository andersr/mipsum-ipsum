import React from 'react'
import TextHeading from './TextHeading'
import Paragraph from './Paragraph'

const AppHeader = props => {
  return (
    <header className='fixed-header'>
      <div className='flex-row flex-vertical-baseline'>
        <div className='flex-main-content'>
          <TextHeading text={props.title} />
        </div>
        <Paragraph text={props.tagline} style='secondary-text' />
        </div>
      <div className='flex-row flex-centered'>
        Content
      </div>
   </header>
  )
}

export default AppHeader

AppHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  tagline: React.PropTypes.string
}
