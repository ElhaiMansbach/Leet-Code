/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let ans = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans += i - nums[i];
  }
  return ans;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));