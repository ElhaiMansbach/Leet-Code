/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length === 0 ? 0 : 1;
  const set = new Set();
  let maxSub = 0,
    left = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[i]);
    maxSub = maxSub >= i - left + 1 ? maxSub : i - left + 1;
  }
  return maxSub;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
