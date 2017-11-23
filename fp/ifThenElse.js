var convert = require('lodash/fp/convert'),
func = convert('ifThenElse', require('../ifThenElse'));

func.placeholder = require('./placeholder');
module.exports = func;
