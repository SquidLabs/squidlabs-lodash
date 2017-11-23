var cond = require('lodash/cond');
var ifThenElse = require('./ifThenElse');
var asFunction = require('./asFunction');
var even = require('./isEven')
/**
 * A wrapper around if
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function ifThenElseIf() {
  return cond(
    map(
      ifThenElse(isEven(arguments.length),
        toArray(arguments),
        concat(
          take(arguments, arguments.length - 1),
          stubTrue,
          last(arguments)
        )
      ),
      function (value, idx) {
        return isEven(idx) ? asFunction(value) : value;
      }
    )
  )
}

module.exports = ifThenElseIf;
