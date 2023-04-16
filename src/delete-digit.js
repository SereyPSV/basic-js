const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  console.log(n);
  let nStr = String(n);
  console.log(nStr);
  for (let i = 1; i < nStr.length; i +=1 ) {
    console.log(nStr[i] > nStr[i - 1]);
    if (nStr[i] > nStr[i - 1]) {
      return Number(nStr.replace(nStr[i - 1], ''));
    }
  }
  return Math.floor(n/10);
}

module.exports = {
  deleteDigit
};
