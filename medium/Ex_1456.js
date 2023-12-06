/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const set = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) count++;
  }
  let maxSub = count;
  for (let i = k; i < s.length; i++) {
    if (maxSub === k) return maxSub;
    if (set.has(s[i - k])) count--;
    if (set.has(s[i])) count++;
    maxSub = maxSub >= count ? maxSub : count;
  }
  return maxSub;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));