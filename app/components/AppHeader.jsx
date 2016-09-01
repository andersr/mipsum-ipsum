import React from 'react'
import TextHeading from './TextHeading'
import Paragraph from './Paragraph'

const AppHeader = props =>
  <div className='flex-row flex-vertical-middle'>
    <div className='flex-main-content'><TextHeading text={props.title} /></div>
    <Paragraph text={props.tagline} style='secondary-text' />
	</div>

export default AppHeader

AppHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  tagline: React.PropTypes.string
}
