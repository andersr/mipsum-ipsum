import React from 'react'

const TextHeading = props => {
  return (
    React.createElement(props.level, { className: 'heading' }, props.text)
  )
}

export default TextHeading

TextHeading.propTypes = {
  text: React.PropTypes.string.isRequired,
  level: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

TextHeading.defaultProps = {
  level: 'h1'
}

// const Heading = props => React.createElement(props.level, {className: "helper-full-width helper-centered" }, props.text)
