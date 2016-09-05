import { connect } from 'react-redux'
import List from '../components/List'

// const getVisibleLipsumBlocks = (blocks) => blocks

const mapStateToProps = (blocks) => blocks

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const VisibleLipsumBlocks = connect(
  mapStateToProps
)(List)

export default VisibleLipsumBlocks
