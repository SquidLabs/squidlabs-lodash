var isFunction = require('lodash/isFunction');
var constant = require('lodash/constant');

/**
 *
 *
 * @param {any} fn
 * @returns
 */
function asFunction(fn) {
  return isFunction(fn) ? fn : constant(fn);
}

module.exports = asFunction;
