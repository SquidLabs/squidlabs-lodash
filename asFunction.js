var isFunction = require('lodash/isFunction');
var constant = require('lodash/constant');

function asFunction(fn) {
  return isFunction(fn) ? fn : constant(fn);
}

module.exports = asFunction;
