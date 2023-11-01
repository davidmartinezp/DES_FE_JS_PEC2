// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(number => number % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((value, index, array) => typeof value === typeof array[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(row => Array.isArray(row) && row.every(num => num > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  function checkSameVowels(word) {
    const wordVowels = word.toLowerCase().split('').filter(char => vowels.includes(char));
    const firstVowel = wordVowels[0];
    return wordVowels.every(vowel => vowel === firstVowel);
  }

  return input.every(word => typeof word === 'string' && checkSameVowels(word));
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
