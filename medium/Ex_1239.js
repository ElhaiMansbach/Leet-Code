/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let max = 0;

  const backTrack = (index, str) => {
    if (str.length !== new Set([...str]).size) return;
    max = Math.max(max, str.length);
    for (let i = index; i < arr.length; i++) {
      backTrack(i + 1, str + arr[i]);
    }
  };
  backTrack(0, "");
  return max;
};
