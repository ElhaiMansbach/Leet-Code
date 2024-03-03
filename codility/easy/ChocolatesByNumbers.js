function solution(N, M) {
  function gcd(a, b) {
    if (a % b === 0) return b;
    else return gcd(b, a % b);
  }
  return N / gcd(N, M);
}

console.log(solution(10, 4)); // 5
console.log(solution(10, 3)); // 10
console.log(solution(10, 5)); // 2
