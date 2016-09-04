import React from 'react'
import classnames from 'classnames'
import Octicon from 'react-octicon'

const Icon = props => <span className={classnames('icon octicon', props.icon, props.style)}></span>

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  style:  React.PropTypes.string
}

// Icon.defaultProps = {
//   style:  React.PropTypes.string
// }

export default Icon
