/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (nums[mid] === target) return true;

    if (nums[mid] > nums[r]) {
      if (target >= nums[l] && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else if (nums[mid] < nums[r]) {
      if (target > nums[mid] && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    } else r--;
  }
  return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([1], 0));
