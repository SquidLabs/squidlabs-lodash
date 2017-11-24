var apply = require('lodash/_apply');
var chunk = require('lodash/chunk');
var baseIteratee = require('lodash/_baseIteratee');
var baseRest = require('lodash/_baseRest');
var isOdd = require('./isOdd');
var stubTrue = require('lodash/stubTrue');

function ifThenElseIf() {
  if (arguments.length < 2) throw "invald number of arguments";

  var pairs = Array.prototype.slice.call(arguments);
  if (isOdd(pairs.length)) pairs.splice(pairs.length - 1, 0, stubTrue());
  pairs = chunk(pairs, 2);

  var index = -1;
  while (++index < pairs.length) {
    var pair = pairs[index];
    if (pair[0]) {
      return pair[1];
    }
  }
}



module.exports = ifThenElseIf;
