// Generator functions
// list of int values for each character http://www.net-comber.com/charset.html

/**
 * Generate random number within between min and max values, inclusive
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generate random lowercase letter.
 * Use one of the int values for a character to create a lowercase letter.
 * Lowercase letter values range from 97 122.
 */
function getRandomLower() {
  return String.fromCharCode(getRandomNumber(97, 122));
}

/**
 * Generate random uppercase letter.
 */
function getRandomUpper() {
  return String.fromCharCode(getRandomNumber(65, 90));
}

console.log(getRandomLower());
console.log(getRandomUpper());
