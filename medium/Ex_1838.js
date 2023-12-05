/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  let l = 0,
    r = 0,
    total = 0;
  nums.sort((a, b) => a - b);
  while (r < nums.length) {
    total += nums[r];
    if (nums[r] * (r - l + 1) > total + k) {
      total -= nums[l];
      l++;
    }
    r++;
  }
  return r - l;
};

console.log(maxFrequency([1, 2, 4], 5));
console.log(maxFrequency([1, 4, 8, 13], 5));
console.log(maxFrequency([3, 9, 6], 2));