/**
 *
 *
 * @param {any} testExpr
 * @param {any} thenExpr
 * @param {any} defaultValue
 * @returns
 */
function ifThen(testExpr, thenExpr, defaultValue) {
  if (testExpr) {
    return thenExpr;
  } else {
    return undefined || defaultValue;
  }
}

module.exports = ifThen;
