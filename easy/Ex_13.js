/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const letters = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] < letters[s[i + 1]]) {
      sum += letters[s[i + 1]] - letters[s[i]];
      i++;
    } else sum += letters[s[i]];
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IX"));
