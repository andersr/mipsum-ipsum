import React from 'react'
import classnames from 'classnames'
import Octicon from 'react-octicon'

const Icon = props => {
  const iconClasses = classnames('icon octicon', props.icon)

  return (
    <span className={iconClasses}></span>
  )
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
