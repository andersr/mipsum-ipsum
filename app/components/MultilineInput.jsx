import React, { PropTypes } from 'react'
// import classnames from 'classnames'

const MultilineInput = (props) => {
  return (
        <textarea className='lipsum-blocks invisible flex-main-content no-horizontal-scrollbars'
          value={props.content}
        />
  )
}

export default MultilineInput

MultilineInput.propTypes = {
  blockId: PropTypes.string,
  content: PropTypes.string.isRequired
}


//
// <form className="min-full-height flex-column">
//             <textarea className="invisible flex-main-content"
//               placeholder={this.props.placeholder}
//               value={this.state.inputValue}
//               onChange={this.saveChanges}
//               autoFocus={this.props.autoFocus}
//               onBlur={this.props.doneEditing}
//               onKeyPress={this.handleOnKeyPress}
//             />
// 	          <div className="form-controls flex-column-centered">
// 	            <TextBtn label="Done" />
// 	            <div className="help-text block-padding">(Or use Shift + Return)</div>
// 	            </div>
//           </form>
