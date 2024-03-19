var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let ans = "";
  while (i >= 0 || j >= 0 || carry > 0) {
    let digit = (i >= 0 ? +a[i] : 0) + (j >= 0 ? +b[j] : 0) + carry;
    if (digit < 2) {
      if (digit === 0) ans = "0" + ans;
      else ans = "1" + ans;
      carry = 0;
    } else {
      if (digit === 2) ans = "0" + ans;
      else ans = "1" + ans;
      carry = 1;
    }
    i--, j--;
  }
  return ans;
};

console.log(addBinary("11", "1"));  
// Output: "100"
console.log(addBinary("1010", "1011")); 
// Output: "10101"