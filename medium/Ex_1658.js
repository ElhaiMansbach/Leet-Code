/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const tatget = nums.reduce((acc, num) => acc + num, 0) - x;
  if (tatget < 0) return -1;
  if (tatget === 0) return nums.length;

  let l = 0;
  let curSum = 0;
  let minLength = Infinity;
  const n = nums.length;

  for (let r = 0; r < n; r++) {
    curSum += nums[r];

    while (curSum > tatget) {
      curSum -= nums[l];
      l++;
    }

    if (curSum === tatget) {
      minLength = Math.min(minLength, n - (r - l + 1));
    }
  }

  return minLength === Infinity ? -1 : minLength;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));