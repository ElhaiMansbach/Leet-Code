/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length;
  if (nums[l] > target) return l;
  if (nums[r - 1] < target) return r;
  while (l < r) {
    let mid = Math.floor((r + l) / 2);
    if (target > nums[mid]) l = mid + 1;
    else if (target < nums[mid]) r = mid;
    else return mid;
  }
  return l;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
