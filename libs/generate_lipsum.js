'use strict'

import { randomNumberBetween, shuffleItems } from './utils'

export default function randomWordParagraph (srcWords) {

  function createSentence (wordQty) {
    var words = []
    var shuffledWords = shuffleItems(srcWords)

    for (var i = 0; i < wordQty; i++) {
      words.push(shuffledWords[i])
    }
    var sentence = words.join(' ')
    sentence += '.'
    var capitalized = sentence[0].toUpperCase() + sentence.substr(1);
    return capitalized
  }

  function createParagraph () {
    var sentenceQty = randomNumberBetween(2,4)
    var textBlock = []
    var wordQty
    for (var i = 0; i < sentenceQty; i++) {
      wordQty = randomNumberBetween(3,7)
      textBlock.push(createSentence(wordQty))
    }

    return textBlock.join(' ')
  }
  return createParagraph()
}