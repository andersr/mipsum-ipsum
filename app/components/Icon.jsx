import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Octicon from 'react-octicon'

const Icon = ({icon, size}) => <span className={classnames('icon octicon', icon, size)}></span>

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string
}

export default Icon
