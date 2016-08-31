'use strict'

import { capitalize, randomNumberBetween, shuffleItems } from './utils'

// generate a single text block with a min/max range.

export default function randomWordParagraph (srcWords) {
  function createSentence (wordQty) {
    const words = []
    const shuffledWords = shuffleItems(srcWords)

    for (let i = 0; i < wordQty; i++) {
      words.push(shuffledWords[i])
    }
    var sentence = words.join(' ')
    sentence += '.'
    return capitalize(sentence)
  }

  function createParagraph () {
    const sentenceQty = randomNumberBetween(2, 4)
    const textBlock = []
    let wordQty
    for (let i = 0; i < sentenceQty; i++) {
      wordQty = randomNumberBetween(3, 7)
      textBlock.push(createSentence(wordQty))
    }

    return textBlock.join(' ')
  }
  return createParagraph()
}
