var filter = require('../src/filter.js');
 
require('chai').should();

describe('Filter functions', function() {

    var cups = [
      { color: 'yellow', size: '300ml' },
      { color: 'blue', size: '400ml' },
      { color: 'blue', size: '300ml' },
      { color: 'yellow', size: '370ml' },
      { color: 'yellow', size: '500ml' }
    ];

  describe('in imperative paradigm', function() {
    it('use loops and ifs', function() {
      filter.imperativeFilter(cups).should.have.length(3);
    });
  });

  describe('in function paradigm', function() {
    it('use a predicate function', function() {
      filter.functionalFilter(cups).should.have.length(3);
    });
  });
});
