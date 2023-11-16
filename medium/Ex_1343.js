/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let counter = 0, sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < k - 1) {
            sum += arr[i];
            continue;
        }
        sum += arr[i];
        sum -= arr[i - k] || 0;
        if (sum / k >= threshold) counter++;
    }
    return counter;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0));