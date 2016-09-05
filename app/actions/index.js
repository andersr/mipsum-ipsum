let nextLipsumBlockId = 0

export const addLipsumBlock = () => {
  return {
    type: 'ADD_LIPSUM_BLOCK',
    id: nextLipsumBlockId++
  }
}
