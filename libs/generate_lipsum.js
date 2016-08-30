/* eslint-disable */
'use strict'

var HELPERS = require('./helpers')
var SRC_WORDS = require('./latin_words')

var RandomWordParagraph = function (wordList) {
  this.wordList = wordList
  this.sentenceQty = HELPERS.getRandomNumberBetween(2,4)

  function shuffledWordList(words){
    return HELPERS.shuffleItems(words)
  }

  function createSentence (wordQty) {
    var sentence = []
    var shuffledWords = shuffledWordList(wordList)

    for (var i = 0; i < wordQty; i++) {
      sentence.push(shuffledWords.shift())
    }
    return sentence
  }

  function createParagraph (sentenceQty) {
    var textBlock = []
    for (var i = 0; i < sentenceQty; i++) {
      var wordQty = HELPERS.getRandomNumberBetween(3,7)
      textBlock.push(createSentence(wordQty))
    }
    return textBlock
  }

  return createParagraph(this.sentenceQty)
}

//export this and and then use this way.
var lipsumBlock = new RandomWordParagraph(SRC_WORDS)

console.log(lipsumBlock)

//REFACTOR: use up entire wordList before creating new one
