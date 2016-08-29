import React from 'react'

const Header = props =>
  <div className='flex-row flex-vertical-middle flex-centered'>
	  <h1>{props.title}</h1>
	</div>

export default Header

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}
