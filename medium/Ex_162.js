/**
 * @param {number[]} nums
 * @return {number}
 */

function helperFunc(nums, l, r) {
  let mid = Math.floor((r + l) / 2);
  let prev = mid > 0 ? nums[mid - 1] : Number.NEGATIVE_INFINITY;
  let next = mid < nums.length - 1 ? nums[mid + 1] : Number.NEGATIVE_INFINITY;

  if (nums[mid] > prev && nums[mid] > next) return mid;
  if (nums[mid] < prev) return helperFunc(nums, l, mid - 1);
  else return helperFunc(nums, mid + 1, r);
}

var findPeakElement = function (nums) {
  if (nums.length === 1 || nums[0] > nums[1]) return 0;
  return helperFunc(nums, 0, nums.length - 1);
};

console.log(findPeakElement([3, 4, 3, 2, 1]));
