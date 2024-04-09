function solution(X, Y, D) {
  const dist = Y - X;
  const jumps = Math.floor(dist / D);
  return dist % D ? jumps + 1 : jumps;
}

console.log(solution(10, 85, 30)); // 3
console.log(solution(10, 10, 30)); // 0
console.log(solution(10, 100, 30)); // 3