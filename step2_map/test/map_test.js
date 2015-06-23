var map = require('../src/map.js');
require('chai').should();

describe('Map function', function() {
  var sweets = [
    { description: 'cookie', value: 10 },
    { description: 'brownie', value: 16 }
  ];

  describe('in imperative paradigm', function() {
    it('uses loops and ifs', function() {
      var newSweets = map.imperativeMap(sweets);

      var aSweet = newSweets[0];
      aSweet.should.have.property('name');
      aSweet.should.have.property('price');
    });
  });

  describe('in functional paradigm', function() {
    it('uses a mapping function on each element', function() {

      var newSweets = map.functionalMap(sweets);

      var aSweet = newSweets[0];
      aSweet.should.have.property('name');
      aSweet.should.have.property('price');
    });
  });
});
