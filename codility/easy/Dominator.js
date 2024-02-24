function solution(A) {
  const map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) map.get(A[i]).push(i);
    else map.set(A[i], [i]);
    if (map.get(A[i]).length > A.length / 2) return i;
  }
  return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // 0
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8])); // -1
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1])); // 0