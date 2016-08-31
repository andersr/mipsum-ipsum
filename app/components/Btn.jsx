import React from 'react'

const Btn = props => <button onClick={props.handleClick}>{props.label}</button>

export default Btn

Btn.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string
}

Btn.defaultProps = {
  label: 'Click'
}
