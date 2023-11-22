/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const set = new Set();
  const max = Math.pow(2, k);
  for (let i = k; i <= s.length; i++) {
    set.add(s.slice(i - k, i));
    if (set.size === max) return true;
  }
  return set.size === max;
};

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("00110", 2));
console.log(hasAllCodes("0110", 1));