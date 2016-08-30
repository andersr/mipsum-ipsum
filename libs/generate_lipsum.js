/* eslint-disable */
'use strict'

var HELPERS = require('./helpers')
var SRC_WORDS = require('./latin_words')

var RandomWordParagraph = function (wordList) {
  this.wordList = wordList
  // console.log('original list ', this.wordList)

  this.sentenceQty = HELPERS.getRandomNumberBetween(2,4)

  // function shuffledWordList(words){
  //   return HELPERS.shuffleItems(words)
  // }

  function createSentence (wordQty, src) {
    var words = []
    var shuffledWords = HELPERS.shuffleItems(src)
    // console.log('shuffledWords ', shuffledWords)

    for (var i = 0; i < wordQty; i++) {
      words.push(shuffledWords[i])
    }
    var sentence = words.join(' ')
    return sentence
  }

  function createParagraph (sentenceQty, words) {
    var textBlock = []
    var wordQty
    for (var i = 0; i < sentenceQty; i++) {
      wordQty = HELPERS.getRandomNumberBetween(3,7)
      textBlock.push(createSentence(wordQty, words))
    }
    return textBlock
  }

  return createParagraph(this.sentenceQty, this.wordList)
}

//export this and and then use this way.
var lipsumBlock = new RandomWordParagraph(SRC_WORDS)

console.log(lipsumBlock)

//REFACTOR: use up entire wordList before creating new one
