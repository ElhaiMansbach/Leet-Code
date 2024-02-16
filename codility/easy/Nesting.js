function solution(S) {
  if (S.length % 2 !== 0) return 0;
  const stack = [];
  for (const char of S) {
    if (char === "(") stack.push(char);
    else {
      if (stack.length === 0) return 0;
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("(()(())())")); // 1
console.log(solution("())")); // 0
console.log(solution("")); // 1
