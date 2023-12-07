/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  const n = s.length;
  s += s;

  let diff1 = 0,
    diff2 = 0;
  let res = Infinity;

  for (let i = 0; i < s.length; i++) {
    const expected1 = i % 2 === 0 ? "0" : "1";
    const expected2 = i % 2 === 0 ? "1" : "0";

    if (s[i] !== expected1) diff1++;
    if (s[i] !== expected2) diff2++;

    if (i >= n) {
      const outgoing1 = (i - n) % 2 === 0 ? "0" : "1";
      const outgoing2 = (i - n) % 2 === 0 ? "1" : "0";

      if (s[i - n] !== outgoing1) diff1--;
      if (s[i - n] !== outgoing2) diff2--;
    }

    if (i >= n - 1) {
      res = Math.min(res, diff1, diff2);
    }
  }

  return res;
};

console.log(minFlips("111000"));
console.log(minFlips("010"));
console.log(minFlips("1110"));