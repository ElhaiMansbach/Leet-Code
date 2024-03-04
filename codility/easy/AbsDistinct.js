function solution(A) {
  const set = new Set(A.map((val) => (val >= 0 ? val : Math.abs(val))));
  return set.size;
}

console.log(solution([-5, -3, -1, 0, 3, 6])); // 5
console.log(solution([-5, -3, -1, 0, 3, 6, 6])); // 5
console.log(solution([1, 2, 3, 4, 5, 6])); // 6
