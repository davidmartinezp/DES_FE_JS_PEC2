// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(number => typeof number === 'number' && number > 10);
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(word => typeof word === 'string' && word.length > 10);
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(row => Array.isArray(row) && row.some(element => element === true));
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some(phrase => typeof phrase === 'string' && phrase.toLowerCase().includes('lost'));
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
