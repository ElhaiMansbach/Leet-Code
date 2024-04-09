function solution(A) {
  const seen = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A.length || A[i] <= 0 || seen.has(A[i])) {
      return 0;
    }
    seen.add(A[i]);
  }
  return seen.size === A.length ? 1 : 0;
}

console.log(solution([4, 1, 3, 2])); // 1
console.log(solution([4, 1, 3])); // 0
console.log(solution([1, 1, 1, 1])); // 0