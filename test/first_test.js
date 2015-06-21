var assert = require('assert');
var sum = require('../src/calc.js');

describe('My first test', function() {
  it('sums two numbers', function() {
    assert.equal(sum(2, 3), 5);
  });
});

