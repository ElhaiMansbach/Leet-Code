var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    res.push(nums[l++]);
    res.push(nums[r--]);
  }
  if (l === r) res.push(nums[l]);
  return res;
};

console.log(rearrangeArray([1, 2, 3, 4, 5])); // [1, 5, 2, 4, 3]
console.log(rearrangeArray([1, 2, 3, 4, 5, 6])); // [1, 6, 2, 5, 3, 4]
console.log(rearrangeArray([1, 2, 3, 4, 5, 6, 7])); // [1, 7, 2, 6, 3, 5, 4]
