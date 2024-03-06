function solution(A) {
  let counter = 0;
  A.sort((a, b) => a - b);
  for (let l = 0; l < A.length - 2; l++) {
    let r = l + 2;
    for (let m = l + 1; m < A.length - 1; m++) {
      while (r < A.length && A[l] + A[m] > A[r]) r++;
      counter += r - m - 1;
    }
  }
  return counter;
}

console.log(solution([10, 2, 5, 1, 8, 12])); // 4

