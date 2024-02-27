function solution(A) {
  if (A.length === 3) return 0;
  const LR = new Array(A.length).fill(0);
  const RL = new Array(A.length).fill(0);
  A[0] = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum < 0) sum = 0;
    LR[i] = sum;
  }
  sum = 0;
  for (let i = A.length - 2; i >= 0; i--) {
    sum += A[i];
    if (sum < 0) sum = 0;
    RL[i] = sum;
  }
  let i = 0;
  let max = 0;
  while (i < A.length - 2) {
    max = Math.max(max, LR[i] + RL[i + 2]);
    i++;
  }
  return max;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2])); // 17
console.log(solution([3, 2, 6, -1, 4, 5, -1, 2, 3])); // 17
console.log(solution([3, 2, 6, -1, 4, 5, -1, 2, 3, 4])); // 17