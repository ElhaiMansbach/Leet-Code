function solution(M, A) {
  const set = new Set();
  let ans = 0;
  let fast = 0,
    slow = 0;
  while (fast < A.length) {
    while (fast < A.length && !set.has(A[fast])) {
      ans += fast - slow + 1;
      set.add(A[fast]);
      fast++;
    }
    while (A[slow] != A[fast]) {
      set.delete(A[slow]);
      slow += 1;
    }
    set.delete(A[slow]);
    slow += 1;
  }
  return Math.min(ans, 1000000000);
}

console.log(solution(6, [3, 4, 5, 5, 2])); // 9
console.log(solution(6, [3, 4, 5, 5, 2, 2])); // 9
console.log(solution(6, [3, 4, 5, 5, 2, 2, 2])); // 9
