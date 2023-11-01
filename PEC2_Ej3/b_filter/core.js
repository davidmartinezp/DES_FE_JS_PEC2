function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(str => !str.includes(' '));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(num => num > 0));
}

function allSameVowels(array) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return array.filter(str => {
    const chars = str.toLowerCase().split('').filter(char => vowels.includes(char));
    const firstChar = chars[0];
    return chars.every(char => char === firstChar);
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
