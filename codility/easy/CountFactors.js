function solution(N) {
  let factors = 0;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      if (i < Math.sqrt(N)) factors += 2;
      else factors++;
    }
  }
  return factors;
}

console.log(solution(24)); // 8
console.log(solution(16)); // 5
console.log(solution(17)); // 2
