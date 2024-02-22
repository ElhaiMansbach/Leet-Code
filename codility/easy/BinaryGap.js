function solution(N) {
  const binary = (N >>> 0).toString(2);
  let count = 0,
    max = 0;
  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === "0") count++;
    else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return max;
}

console.log(solution(1041)); // 5
console.log(solution(32)); // 0
console.log(solution(9)); // 2
