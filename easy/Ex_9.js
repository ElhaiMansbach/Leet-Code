/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reverseNum = parseInt(x.toString().split("").reverse().join(""));
  return x === reverseNum;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));