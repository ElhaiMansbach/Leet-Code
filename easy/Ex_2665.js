/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let resetNum = 0;
    return {
        increment: () => init + ++resetNum,
        decrement: () => init + --resetNum,
        reset: () => {
            resetNum = 0;
            return init;
        }
    };
};

console.log(createCounter(5).increment());
console.log(createCounter(5).reset());
console.log(createCounter(5).decrement());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */