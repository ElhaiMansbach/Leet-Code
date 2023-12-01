/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  return words.reduce(
    (acc, curr, i) => (curr.indexOf(x) > -1 ? [...acc, i] : acc),
    []
  );
};

console.log(findWordsContaining(["apple", "banana", "orange"], "a"));
console.log(findWordsContaining(["door", "window", "table"], "o"));
console.log(findWordsContaining(["chair", "couch", "table"], "z"));