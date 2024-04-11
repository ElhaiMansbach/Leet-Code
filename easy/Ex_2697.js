var makeSmallestPalindrome = function (s) {
  const arr = s.split("");
  for (
    let l = 0, r = arr.length - 1;
    l < Math.floor(arr.length / 2);
    l++, r--
  ) {
    if (arr[l] !== arr[r]) {
      if (arr[l] < arr[r]) arr[r] = arr[l];
      else arr[l] = arr[r];
    }
  }
  return arr.join("");
};

console.log(makeSmallestPalindrome("egcfe")); //"efcfe"
console.log(makeSmallestPalindrome("abc")); //"aba"