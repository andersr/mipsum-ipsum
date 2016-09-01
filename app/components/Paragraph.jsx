import React from 'react'

const Paragraph = props =>
  <p id={props.id}>{props.text}</p>

export default Paragraph

Paragraph.propTypes = {
  text: React.PropTypes.string.isRequired
}
