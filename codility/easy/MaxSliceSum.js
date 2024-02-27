function solution(A) {
  let maxSum = A[0],
    sum = 0;
  for (const val of A) {
    if (sum + val >= 0) {
      sum += val;
      maxSum = maxSum >= sum ? maxSum : sum;
    } else {
      sum = 0;
      maxSum = maxSum >= val ? maxSum : val;
    }
  }
  return maxSum;
}

console.log(solution([3, 2, -6, 4, 0])); // 5
console.log(solution([3, 2, -6, 4, 0, 5])); // 7
console.log(solution([3, 2, -6, 4, 0, 5, -3])); // 7
