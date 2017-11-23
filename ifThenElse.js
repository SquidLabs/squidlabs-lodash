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
function ifThenElse(testExpr, thenExpr, elseExpr) {
  if (testExpr) {
    return thenExpr;
  } else {
    return elseExpr;
  }
}

module.exports = ifThenElse;
