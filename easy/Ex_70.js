var climbStairs = function (n) {
  const steps = [];
  for (let i = 1; i <= n; i++) {
    if (i <= 1) steps[i] = 1;
    else if (i === 2) steps[i] = 2;
    else steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5