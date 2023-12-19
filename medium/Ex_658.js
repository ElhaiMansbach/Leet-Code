/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let l = 0,
    r = k - 1;
  if (arr[0] >= x) return arr.slice(0, k);
  if (arr[arr.length - 1] <= x) return arr.slice(arr.length - k);

  while (r < arr.length - 1) {
    if (
      Math.abs(arr[l] - x) > Math.abs(arr[r + 1] - x) ||
      arr[l] === arr[r + 1]
    ) {
      l++, r++;
    } else break;
  }
  return arr.slice(l, r + 1);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
