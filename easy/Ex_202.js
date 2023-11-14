/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  while (n !== 1) {
    let sum = 0;
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(+str[i], 2);
    }
    if (set.has(sum)) return false;
    n = sum;
    set.add(n);
  }
  return true;
};

console.log(isHappy(19));