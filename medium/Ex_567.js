/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const charArr1 = new Array(26).fill(0);
  const charArr2 = new Array(26).fill(0);

  for (const char of s1) {
    charArr1[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < s1.length; i++) {
    charArr2[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  if (isEquals(charArr1, charArr2)) return true;

  let l = 0,
    r = s1.length;
  while (r < s2.length) {
    charArr2[s2[l].charCodeAt(0) - "a".charCodeAt(0)]--;
    charArr2[s2[r].charCodeAt(0) - "a".charCodeAt(0)]++;
    if (isEquals(charArr1, charArr2)) return true;
    l++, r++;
  }
  return false;
};

function isEquals(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));