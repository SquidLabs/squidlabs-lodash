/**
 *
 *
 * @param {any} testExpr
 * @param {any} thenExpr
 * @param {any} elseExpr
 * @returns
 */
function ifThenElse(testExpr, thenExpr, elseExpr) {
  if (testExpr) {
    return thenExpr;
  } else {
    return elseExpr;
  }
}

module.exports = ifThenElse;
