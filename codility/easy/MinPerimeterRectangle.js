function solution(N) {
  let min = Infinity;
  for (let i = 1; i < Math.sqrt(N) + 1; i++) {
    if (N % i === 0) {
      min = Math.min(min, 2 * (i + N / i));
    }
  }
  return min;
}

console.log(solution(30)); // 22
console.log(solution(36)); // 24
console.log(solution(17)); // 36
