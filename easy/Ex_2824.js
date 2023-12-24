/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
      else break;
    }
  }
  return count;
};

console.log(countPairs([1, 1, 1, 2, 2, 2, 3, 3, 3], 3));
console.log(countPairs([1, 1, 1, 2, 2, 2], 1));
