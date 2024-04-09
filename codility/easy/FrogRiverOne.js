function solution(X, A) {
  const set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) return i;
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3])); // 4
console.log(solution(3, [1, 3, 1, 3, 1, 2, 3, 1])); // 5