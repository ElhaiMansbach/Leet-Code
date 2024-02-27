function solution(A) {
  let profit = 0;
  let l = 0,
    r = 1;
  while (r < A.length) {
    if (A[r] - A[l] > profit) profit = A[r] - A[l];
    if (A[r] < A[l]) l = r;
    r++;
  }
  return profit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367])); // 356
console.log(solution([23171, 21011, 21123, 21366, 21013, 21367, 20000])); // 356
console.log(solution([23171, 21011, 21123, 21366, 21013, 21367, 20000, 25000])); // 5000