import React from 'react'

const ThreeColumnRow = props => {

  const centerColClasses = 'flex-main-content'


  const leftCol = props.leftCol? <div className={leftColStyle}>{props.leftCol}</div> || null
  const centerCol = props.center? <div className={centerColClasses}>{props.center}</div> || null
  const rightCol = props.right? <div className={centerColStyle}>{props.right}</div> || null

  return (
    <div className='three-col-row'>
      {lefCol}
      {centerCol}
      {rightCol}
    </div>
  )
}


export default ThreeColumnRow

ThreeColumnRow.propTypes = {
  leftCol: React.PropTypes.object,
  centerCol: React.PropTypes.object,
  rightCol: React.PropTypes.object,
  mainContent: React.PropTypes.oneOf(['left', 'center', 'right'])
}

ThreeColumnRow.defaultProps = {
  mainContent: 'center'
}


// classnames('clipboard-btn', {
//   'copied': this.state.copied
// })
