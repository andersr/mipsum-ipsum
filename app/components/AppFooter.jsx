import React from 'react'
import Icon from './Icon'
import Btn from './Btn'

const AppFooter = props => {
  const addIcon = <Icon icon={'octicon-plus'} />
  return (
    <footer className='fixed-footer flex-row flex-centered'>
      <Btn icon={addIcon} handleClick={() => props.addTextBlock()} />
    </footer>
  )
}

// AppFooter.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   tagline: React.PropTypes.string,
//   textBlocks: React.PropTypes.string
// }

export default AppFooter
