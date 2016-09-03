import React from 'react'
import Btn from './Btn'

const AppFooter = props => {
  return (
    <footer className='fixed-footer flex-row flex-centered'>
      <Btn label={'Add block'} handleClick={() => props.addTextBlock()} />
    </footer>
  )
}

// AppFooter.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   tagline: React.PropTypes.string,
//   textBlocks: React.PropTypes.string
// }

export default AppFooter
