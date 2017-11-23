var findLast = require('lodash/findLast');
var constant = require('lodash/constant');
var last = require('lodash/last');

function or() {
  return findLast(arguments, constant) || false;
}

module.exports = or;
