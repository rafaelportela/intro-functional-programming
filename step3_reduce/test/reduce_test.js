var reduce = require('../src/reduce.js');
var expect = require('chai').expect;

describe('Reduce function', function() {
  var purchases = [
    { description: 'beer', value: 20 },
    { description: 'snacks', value: 16 }
  ];

  describe('in imperative paradigm', function() {
    it('uses loops and ifs', function() {
      var costOfPurchases = reduce.imperativeReduce(purchases);

      expect(costOfPurchases).to.eql(36);
    });
  });

  describe('in functional paradigm', function() {
    it('uses an accumulative function returning a value', function() {
      var costOfPurchases = reduce.functionalReduce(purchases);

      expect(costOfPurchases).to.eql(36);
    });
  });
});
