function solution(A) {
  const set = new Set();
  for (const num of A) {
    if (set.has(num)) set.delete(num);
    else set.add(num);
  }
  return set.entries().next().value[0];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9])); // 7
console.log(solution([9, 3, 9, 3, 9, 7, 9, 7, 7])); // 7
console.log(solution([9, 3, 9, 3, 9, 7, 9, 7, 7, 7, 7])); // 7
