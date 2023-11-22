/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let number = BigInt(num.join('')) + BigInt(k);
    return number.toString().split('').map(val => parseInt(val));
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));