import React from 'react'
import classnames from 'classnames'
import Octicon from 'react-octicon'

const Icon = props => <span className={classnames('icon octicon', props.icon)}></span>

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
