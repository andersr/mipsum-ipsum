import React from 'react'

const Paragraph = props =>
  <p className={props.style}>{props.text}</p>

export default Paragraph

Paragraph.propTypes = {
  text: React.PropTypes.string.isRequired,
  style: React.PropTypes.string
}
