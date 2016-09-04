import React from 'react'
import classnames from 'classnames'

const Btn = props => {
  const isIconBtn = props.icon !== null
  const btnClasses = classnames('btn', {
    'icon-btn': isIconBtn,
    'btn--round': props.isRound
  })
  return (
    <button className={btnClasses} onClick={props.handleClick}>{props.icon}{props.label}</button>
  )
}

Btn.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  icon: React.PropTypes.object,
  isRound: React.PropTypes.bool
}

Btn.defaultProps = {
  icon: null,
  label: null,
  isRound: false
}

export default Btn
