import React from 'react'

const Btn = props => <button onClick={props.handleClick}>{props.icon}{props.label}</button>

export default Btn

Btn.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  icon: React.PropTypes.object
}

Btn.defaultProps = {
  icon: null,
  label: null
}
