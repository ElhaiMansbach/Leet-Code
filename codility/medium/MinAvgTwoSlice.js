function solution(A) {
  if (A.length === 2) return 0;
  let minAvg = Infinity;
  let index = 0;
  for (let i = 0; i < A.length - 2; i++) {
    let avg1 = (A[i] + A[i + 1]) / 2;
    let avg2 = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (minAvg > avg1 || minAvg > avg2) {
      index = i;
      minAvg = Math.min(avg1, avg2);
    }
  }
  if ((A[A.length - 1] + A[A.length - 2]) / 2 < minAvg) return A.length - 2;
  return index;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8])); // 1
console.log(solution([4, 2, 2, 5, 1, 5, 8, 1])); // 1
console.log(solution([4, 2, 2, 5, 1, 5, 8, 1, 1])); // 1
