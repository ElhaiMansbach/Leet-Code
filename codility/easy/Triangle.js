function solution(A) {
  if (A.length < 3) return 0;
  A.sort((a, b) => a - b);
  for (let i = 2; i < A.length; i++) {
    if (
      A[i - 2] + A[i - 1] > A[i] &&
      A[i - 1] + A[i] > A[i - 2] &&
      A[i] + A[i - 2] > A[i - 1]
    )
      return 1;
  }
  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]) === 1);
console.log(solution([10, 50, 5, 1]) === 0);
console.log(solution([10, 5, 8]) === 1);
