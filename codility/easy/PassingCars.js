function solution(A) {
  let sum = A.reduce((acc, val) => acc + val);
  let counter = 0;
  for (const num of A) {
    if (!num) counter += sum;
    else sum--;
  }
  return counter > 1000000000 ? -1 : counter;
}

console.log(solution([0, 1, 0, 1, 1])); // 5
console.log(solution([0, 1, 0, 1, 0])); // 3
console.log(solution([0, 0, 0, 0, 0])); // 0
