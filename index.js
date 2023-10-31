var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length;
  let l = 0;
  let r = 0;
  let count = 1;
  while (r < nums.length) {
    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      r++;
      count++;
    }
    let min = Math.min(2, count);
    for (let i = 0; i < min; i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
    count = 1;
    console.log(nums);
  }
  return l;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
removeDuplicates([0, 0, 0, 0, 0, 0, 2, 2, 3, 3]);
removeDuplicates([0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3]);
