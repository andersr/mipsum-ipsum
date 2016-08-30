/* eslint-disable */
'use strict'

var HELPERS = require('./helpers')

exports.randomWordParagraph = function (srcWords) {

  function createSentence (wordQty) {
    var words = []
    var shuffledWords = HELPERS.shuffleItems(srcWords)

    for (var i = 0; i < wordQty; i++) {
      words.push(shuffledWords[i])
    }
    var sentence = words.join(' ')
    sentence += '.'
    var capitalized = sentence[0].toUpperCase() + sentence.substr(1);
    return capitalized
  }

  function createParagraph () {
    var sentenceQty = HELPERS.getRandomNumberBetween(2,4)
    var textBlock = []
    var wordQty
    for (var i = 0; i < sentenceQty; i++) {
      wordQty = HELPERS.getRandomNumberBetween(3,7)
      textBlock.push(createSentence(wordQty))
    }

    return textBlock.join(' ')
  }
  return createParagraph()

}

//export this and and then use this way.

//REFACTOR: use up entire wordList before creating new one
