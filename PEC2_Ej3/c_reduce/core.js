function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

function productAll(array) {
  if (array.length === 0 || array.flat().some(isNaN)) {
    return 0; 
  }
  return array.flat().reduce((acc, curr) => acc * curr, 1);
}

function objectify(array) {
  return array.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

function luckyNumbers(array) {
  if (array.length === 0) {
    return 'No lucky numbers';
  }

  const luckyNumbersString = array.reduce((acc, number, index) => {
    if (index === array.length - 1) {
      return `${acc}, and ${number}`;
    } else if ( index == 0) {
      return `${acc}: ${number}`;
    } else {
      return `${acc}, ${number}`;
    }
  }, 'Your lucky numbers are');

  return luckyNumbersString;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
