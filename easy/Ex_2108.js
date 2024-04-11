var firstPalindrome = function (words) {
  function isPalindrome(word) {
    for (
      let l = 0, r = word.length - 1;
      l < Math.floor(word.length / 2);
      l++, r--
    ) {
      if (word[l] !== word[r]) return false;
    }
    return true;
  }

  for (const str of words) {
    if (isPalindrome(str)) return str;
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // ada
console.log(firstPalindrome(["notapalindrome", "racecar"])); // racecar
