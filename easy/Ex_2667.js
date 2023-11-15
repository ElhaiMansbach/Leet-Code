/**
 * @return {Function}
 */

var createHelloWorld = function () {
  return (...arg) => {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
