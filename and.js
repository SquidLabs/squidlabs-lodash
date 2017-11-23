function and() {
  return every(arguments, constant) ? last(arguments) : false;
}

module.exports = and;
