/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let str = digits.join("");
  let num = BigInt(str) + 1n;
  return num.toString().split("").map(Number);
};

console.log(plusOne([1, 2, 3]));
