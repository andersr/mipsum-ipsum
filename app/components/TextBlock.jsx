import React from 'react'

const TextBlock = props =>
  <p id={props.id}>{props.text}</p>

export default TextBlock

TextBlock.propTypes = {
  text: React.PropTypes.string.isRequired
}
