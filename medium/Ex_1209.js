/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];
  for (const char of s) {
    if (stack.length !== 0 && stack[stack.length - 1][0] === char)
      stack[stack.length - 1][1]++;
    else stack.push([char, 1]);
    if (stack[stack.length - 1][1] === k) stack.pop();
  }
  return stack.reduce((str, curr) => (str += curr[0].repeat(curr[1])), "");
};

console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais", 2));
