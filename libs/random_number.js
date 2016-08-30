var randomNumber = require('random-number')

module.exports = function getRandomNumber(min, max) {
  return randomNumber({
    min: min,
    max: max,
    integer: true
  })
}
