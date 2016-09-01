import React from 'react'

const Heading = props =>
  <div className='flex-row flex-vertical-middle flex-centered'>
	  <h1>{props.title}</h1>
	</div>

export default Heading

Heading.propTypes = {
  title: React.PropTypes.string.isRequired
}


// const Heading = props => React.createElement(props.level, {className: "helper-full-width helper-centered" }, props.text)
// 
// Heading.propTypes = {
//   text:    React.PropTypes.string.isRequired,
//   level:   React.PropTypes.string,
//   isLogo:  React.PropTypes.bool,
//   logoSrc: React.PropTypes.string
// }
