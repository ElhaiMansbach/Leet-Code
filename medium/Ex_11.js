/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    max = 0;

  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
