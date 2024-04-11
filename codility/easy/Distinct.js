function solution(A) {
  return new Set(A).size;
}

console.log(solution([2, 1, 1, 2, 3, 1])); // 3
console.log(solution([2, 1, 1, 2, 3, 4, 3])); // 4
console.log(solution([2, 1, 1, 2, 3, 5, 3, 4])); // 5