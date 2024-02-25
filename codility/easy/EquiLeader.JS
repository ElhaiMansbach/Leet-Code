function solution(A) {
  function findLeader(A) {
    let num = -1;
    for (let i = 0; i < A.length; i++) {
      if (map.has(A[i])) map.set(A[i], map.get(A[i]) + 1);
      else map.set(A[i], 1);
      if (map.get(A[i]) > A.length / 2) num = A[i];
    }
    return num;
  }

  const map = new Map();
  const leaderNum = findLeader(A);
  let ans = 0,
    half1 = 0,
    half2 = map.get(leaderNum);

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === leaderNum) {
      half1++;
      half2--;
    }
    if (half1 > (i + 1) / 2 && half2 > (A.length - 1 - i) / 2) ans++;
  }
  return ans;
}

console.log(solution([4, 3, 4, 4, 4, 2])); // 2
console.log(solution([4, 4, 2, 5, 3, 4, 4, 4])); // 3
console.log(solution([4, 4, 4, 4, 4, 4, 4, 4])); // 7
