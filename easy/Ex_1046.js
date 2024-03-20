var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    let temp1 = stones.pop();
    temp1 -= stones.pop();
    if (!temp1) continue;
    stones.push(temp1);
  }
  return stones.length === 0 ? 0 : stones[0];
};
