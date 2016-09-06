'use strict'

import { capitalize, randomNumberBetween, shuffleItems } from './utils'

export default function randomWordParagraph (srcWords, minWords = 25, maxWords = 30) {
  const totalWords = randomNumberBetween(minWords, maxWords)
  const wordCollection = getItems(srcWords, totalWords)
  const shuffledCollection = shuffleItems(wordCollection)

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
    let sentence = shuffledCollection.slice(start, end)
    sentence[sentence.length - 1] += '.'
    sentence[0] = capitalize(sentence[0])

    return sentence.join(' ')
  }

  function getItems (src, count) {
    let collection = []
    let i = 0

    while (collection.length < count) {
      collection.push(src[i])
      i === (src.length -1) ? i = 0 : i++
    }

    return collection
  }
}
