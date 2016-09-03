import React from 'react'
import Icon from './Icon'
import Btn from './Btn'

const AppFooter = props => {
  const addIcon = <Icon icon={'octicon-plus'} />
  return (
    <footer id='app-footer' className='flex-row flex-centered'>
      <Btn icon={addIcon} handleClick={() => props.addTextBlock()} />
    </footer>
  )
}

export default AppFooter
