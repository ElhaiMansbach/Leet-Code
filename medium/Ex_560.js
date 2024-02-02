/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let res = 0,
    sum = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let prefix = sum - k;
    if (map.has(prefix)) {
      res += map.get(prefix);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 3, 4, 5], 10));