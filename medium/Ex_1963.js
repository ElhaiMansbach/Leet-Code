/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let extraClosing = 0,
    max = 0;
  for (const char of s) {
    if (char === "]") {
      extraClosing++;
      max = Math.max(max, extraClosing);
    } else extraClosing--;
  }
  return Math.ceil(max / 2);
};

console.log(minSwaps("][][")); // 1
console.log(minSwaps("]]][[[")); // 2
console.log(minSwaps("[]")); // 0
