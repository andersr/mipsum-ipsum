let nextLipsumBlockId = 0
export const addLipsumBlock = (text) => {
  return {
    type: 'ADD_LIPSUM_BLOCK',
    id: nextLipsumBlockId++,
    text
  }
}
