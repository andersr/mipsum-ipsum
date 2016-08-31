'use strict'

import { capitalize, randomNumberBetween, shuffleItems } from './utils'

export default function randomWordParagraph (srcWords) {
  const totalWords = randomNumberBetween(20, 25)
  const wordCollection = shuffleItems(srcWords).slice(0, totalWords)

  return makeParagraph()

  function makeParagraph () {
    let paragraph = []
    let wordsUsed = 0
    let sentenceWordQty

    while (wordsUsed < totalWords) {
      sentenceWordQty = randomNumberBetween(3, 8)
      paragraph.push(makeSentence(wordsUsed, sentenceWordQty))
      wordsUsed += sentenceWordQty
    }
    return paragraph.join(' ')
  }

  function makeSentence (start, length) {
    const end = start + length
    let sentence = wordCollection.slice(start, end)
    sentence[sentence.length - 1] += '.'
    sentence[0] = capitalize(sentence[0])

    return sentence.join(' ')
  }
}
