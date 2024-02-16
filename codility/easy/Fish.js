function solution(A, B) {
  let counter = 0;
  const stack = [];
  for (let i = 0; i < B.length; i++) {
    if (B[i] === 0) {
      if (stack.length === 0) counter++;
      else {
        while (A[i] > stack[stack.length - 1]) stack.pop();
        if (stack.length === 0) counter++;
      }
    } else stack.push(A[i]);
  }
  return counter + stack.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); // 2

