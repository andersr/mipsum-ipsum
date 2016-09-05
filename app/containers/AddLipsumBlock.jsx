import React from 'react'
import { connect } from 'react-redux'
import { addLipsumBlock } from '../actions'
import Btn from '../components/Btn'

let AddLipsumBlock = ({ dispatch }) => (
  <Btn label={'Add Block'} handleClick={() => dispatch(addLipsumBlock())} />
)

AddLipsumBlock = connect()(AddLipsumBlock)

export default AddLipsumBlock

//
// <div>
//   <form onSubmit={e => {
//     e.preventDefault()
//     if (!input.value.trim()) {
//       return
//     }
//     dispatch(addTodo(input.value))
//     input.value = ''
//   }}>
//     <input ref={node => {
//       input = node
//     }} />
//     <button type="submit">
//       Add Todo
//     </button>
//   </form>
// </div>
