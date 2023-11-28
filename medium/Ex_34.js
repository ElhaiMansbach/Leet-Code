/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (nums[mid] === target) {
      (l = mid - 1), (r = mid + 1);
      while (nums[l] === target) l--;
      while (nums[r] === target) r++;
      return [l + 1, r - 1];
    } else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
