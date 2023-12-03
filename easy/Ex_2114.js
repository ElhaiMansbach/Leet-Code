/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (const i of sentences) {
    max = Math.max(max, i.split(" ").length);
  }
  return max;
};

console.log(
  mostWordsFound(["i love you", "island", "iroman", "i love leetcode"])
);
console.log(mostWordsFound(["hello", "world", "leetcode"]));
