var QUnit = require('qunit-extras');
var asFunction = require('../asFunction');
var ifThen = require('../ifThen');
var ifThenElse = require('../ifThenElse');
var ifThenElseIf = require('../ifThenElseIf');
var isEven = require('../isEven');
var isNegative = require('../isNegative');
var isOdd = require('../isOdd');
var isPositive = require('../isPositive');
var isZero = require('../isZero');

QUnit.test("asFunction", function (assert) {
  var testValue = 'test';
  var testAsFunctionOnFn = function testAsFunctionOnFn() { return testValue; }
  assert.ok(typeof asFunction(testValue) === "function", "returns a function");
  assert.equal(testValue, (asFunction(testValue))(), "returns expected value");
  assert.equal(testAsFunctionOnFn, asFunction(testAsFunctionOnFn), "does nothing to an existing function");
});

QUnit.test("ifThen", function (assert) {
  var testIfThenOnFn = function testIfThenOnFn() {
    return "testvalue";
  };
  assert.ok(ifThen(true, true), "if true then true");
  assert.equal(ifThen(false, false), undefined, "returns undefined if false");
  assert.equal(ifThen(true, testIfThenOnFn), testIfThenOnFn, "returns the function");
});

QUnit.test("ifThenElse", function (assert) {
  assert.equal(ifThenElse(true, 'true', 'false'), 'true');
  assert.equal(ifThenElse(false, 'true', 'false'), 'false');
});

QUnit.test("ifThenElseIf", function (assert) {
  assert.equal(ifThenElseIf(true, 'if'), 'if', 'if then');
  assert.equal(ifThenElseIf(false, 'if', 'else'), 'else', 'if then else');
  assert.equal(ifThenElseIf(false, 'if', true, 'elseif'), 'elseif', 'if then elseif');
  assert.equal(ifThenElseIf(false, 'if', false, 'elseif', 'else'), 'else', 'if then elseif else');
});

QUnit.test("isEven", function (assert) {
  assert.equal(isEven(2), true, 'two returns true');
  assert.equal(isEven(1), false, 'one returns false');
  assert.equal(isEven(0), true, 'zero returns true');
});


QUnit.test("isNegative", function (assert) {
  assert.equal(isNegative(-2), true, 'negative two returns true');
  assert.equal(isNegative(1), false, 'one returns false');
  assert.equal(isNegative(0), false, 'zero returns false');
});

QUnit.test("isOdd", function (assert) {
  assert.equal(isOdd(2), false, 'two returns true');
  assert.equal(isOdd(1), true, 'one returns false');
  assert.equal(isOdd(0), false, 'zero returns false');
});

QUnit.test("isPositive", function (assert) {
  assert.equal(isPositive(2), true, 'two returns true');
  assert.equal(isPositive(-1), false, 'negative one returns false');
  assert.equal(isPositive(0), false, 'zero returns false');
});

QUnit.test("isZero", function (assert) {
  assert.equal(isZero(2), false, 'two returns false');
  assert.equal(isZero(-1), false, 'negative one returns false');
  assert.equal(isZero(0), true, 'zero returns true');
});

QUnit.config.hidepassed = true;
QUnit.config.noglobals = true;

QUnit.load();
QUnit.start();

