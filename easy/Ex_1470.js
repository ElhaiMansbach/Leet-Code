/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let l = 0;
  const ans = [];
  while (l < n) {
    ans.push(nums[l], nums[l + n]);
    l++;
  }
  return ans;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
