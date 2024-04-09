function solution(A, K) {
  if (!A.length) return A;
  while (K >= A.length) K -= A.length;
  for (let i = 0; i < K; i++) A.unshift(A.pop());
  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]
