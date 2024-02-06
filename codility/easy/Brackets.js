function solution(S) {
  if (S.length % 2 !== 0) return 0;
  const brackets = { "{": "}", "(": ")", "[": "]" };
  const stack = [];
  for (const char of S) {
    if (brackets.hasOwnProperty(char)) stack.push(char);
    else {
      if (brackets[stack[stack.length - 1]] !== char) return 0;
      else stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("{[()()]}")); // 1
console.log(solution("([)()]")); // 0
console.log(solution("")); // 1