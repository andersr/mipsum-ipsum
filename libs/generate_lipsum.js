'use strict'

import { capitalize, randomNumberBetween, shuffleItems } from './utils'

// generate a single text block with a min/max range.

export default function randomWordParagraph (srcWords) {
  const totalWords = randomNumberBetween(20, 25)
  const maxWordLength = 8
  const wordCollection = shuffleItems(srcWords).slice(0, totalWords)
  let wordQty

  return makeParagraph()

  // console.log('newParagraph, ', newParagraph)
  //
  // return newParagraph

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
