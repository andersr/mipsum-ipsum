import React from 'react'
import Icon from './Icon'
import Btn from './Btn'

const AppFooter = props => {
  const addIcon = <Icon icon={'octicon-plus'} />
  return (
    <footer className='app-footer flex-row flex-centered'>
      <Btn icon={addIcon} handleClick={() => props.addTextBlock()} />
    </footer>
  )
}

export default AppFooter
