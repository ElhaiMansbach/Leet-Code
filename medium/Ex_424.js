/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0,
    r = 0,
    max = 0;
  const letters = new Map();
  while (r < s.length) {
    letters.set(s[r], (letters.get(s[r]) || 0) + 1);
    if (r - l + 1 - Math.max(...letters.values()) > k) {
      letters.set(s[l], letters.get(s[l]) - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};

console.log(characterReplacement("AABABBA", 1));    
console.log(characterReplacement("ABAB", 2));

