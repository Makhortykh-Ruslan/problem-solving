const obj = require('./custom-math-pow.js');

function someFunction(x) {
  obj.customMathPow(x);
  obj.customMathPow(x + 1);
}

module.exports = { someFunction };
