const lipsumBlock = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LIPSUM_BLOCK':
      return {
        id: action.id
      }
      default:
      return state
  }
}

export default lipsumBlock
