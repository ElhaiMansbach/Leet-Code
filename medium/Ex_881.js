var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    count++;
  }
  return count;
};

console.log(numRescueBoats([1, 2], 3)); // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)); // 4
