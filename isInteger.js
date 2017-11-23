var isInt = function isInt(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
}

function isInteger(number) {
  return Number.isInteger ? Number.isInteger() : isInt(number);
}

module.isInteger = even;
