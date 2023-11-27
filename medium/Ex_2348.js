/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let count = 0;
  let ans = nums.reduce((acc, val) => {
    return acc + (count = val === 0 ? count + 1 : 0);
  }, 0);
  return ans;
};

console.log(zeroFilledSubarray([0, 0, 0, 0, 0]));
console.log(zeroFilledSubarray([1, 0, 0, 2, 0]));
console.log(zeroFilledSubarray([0, 1, 7, 0, 0]));
console.log(zeroFilledSubarray([0, 0, 1, 3, 2]));
