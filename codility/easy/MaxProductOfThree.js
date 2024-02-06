function solution(A) {
  A.sort((a, b) => a - b);
  let mult1 = A[0] * A[1] * A[A.length - 1];
  let mult2 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  return Math.max(mult1, mult2);
}

console.log(solution([-3, 1, 2, -2, 5, 6]) === 60);
console.log(solution([-5, 5, -5, 4]) === 125);
console.log(solution([-5, -6, -4, -7, -10]) === -120);
