import React from 'react'

const AppHeader = props =>
  <div className='flex-row flex-vertical-middle flex-centered'>
	  <h1>{props.title}</h1>
	</div>

export default AppHeader

AppHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}
