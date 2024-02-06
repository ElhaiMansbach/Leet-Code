function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}

console.log(solution(6, 11, 2)); // 3
console.log(solution(6, 11, 3)); // 2
console.log(solution(6, 11, 4)); // 1
