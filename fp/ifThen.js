var convert = require('lodash/fp/convert'),
func = convert('ifThen', require('../ifThen'));

func.placeholder = require('./placeholder');
module.exports = func;
