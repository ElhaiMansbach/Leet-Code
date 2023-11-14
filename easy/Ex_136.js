/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let uniqNum = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    uniqNum = uniqNum ^ nums[idx];
  }
  return uniqNum;
};

console.log(singleNumber([2, 2, 1])); 
console.log(singleNumber([4, 1, 2, 1, 2]));