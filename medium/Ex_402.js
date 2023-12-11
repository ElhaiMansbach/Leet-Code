/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  for (const i of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > i) {
      stack.pop();
      k--;
    }
    stack.push(i);
  }
  while (k > 0 && stack.length) {
    stack.pop();
    k--;
  }
  while (stack[0] === "0") {
    stack.shift();
  }
  return stack.join("") || "0";
};

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));