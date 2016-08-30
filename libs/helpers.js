var randomNumber = require('random-number')
var shuffle = require('shuffle-array')

exports.getRandomNumberBetween = function (min, max) {
  return randomNumber({
    min: min,
    max: max,
    integer: true
  })
}

exports.shuffleItems = function (items) {
  return shuffle(items)
}

// exports.arrayIsEmpty = function (arr) {
//
// }
