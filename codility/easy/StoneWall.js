function solution(H) {
  let blockCounter = 0;
  const stack = [-1];
  for (const val of H) {
    while (val < stack[stack.length - 1]) stack.pop();
    if (val === stack[stack.length - 1]) continue;
    else {
      blockCounter++;
      stack.push(val);
    }
  }
  return blockCounter;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])); // 7
console.log(solution([8, 8, 8, 8, 8, 8, 8, 8, 8])); // 1
console.log(solution([8, 8, 8, 8, 8, 8, 8, 8, 7])); // 2
