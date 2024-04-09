function solution(A) {
  leftSum = 0;
  rightSum = A.reduce((acc, val) => acc + val);
  let minDiff = Infinity;
  for (let i = 0; i < A.length - 1; i++) {
    (leftSum += A[i]), (rightSum -= A[i]);
    let diff = Math.abs(leftSum - rightSum);
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
}

console.log(solution([3, 1, 2, 4, 3])); // 1
console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // 0
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8])); // 1
