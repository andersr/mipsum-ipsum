import React from 'react'
import classnames from 'classnames'

const Btn = props => {
  const isIconBtn = props.icon !== null
  const btnClasses = classnames('btn', {
    'icon-btn': isIconBtn
  })
  return (
    <button className={btnClasses} onClick={props.handleClick}>{props.icon}{props.label}</button>
  )
}

Btn.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  icon: React.PropTypes.object
}

Btn.defaultProps = {
  icon: null,
  label: null
}

export default Btn
