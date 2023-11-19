/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
  return functions.reduce(
    (acc, fn) => {
      return (x) => acc(fn(x));
    },
    (x) => x
  );
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4)); // 65
