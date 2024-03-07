function solution(A, B) {
  let counter = 0;
  let lastPosition = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > lastPosition) {
      counter++;
      lastPosition = B[i];
    }
  }
  return counter;
}

console.log(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])); // 3
