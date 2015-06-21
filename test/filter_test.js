var filter = require('../src/filter.js');

require('chai').should();

describe('Filter function', function() {

    var cups = [
      { color: 'yellow', size: '300ml' },
      { color: 'blue', size: '400ml' },
      { color: 'blue', size: '300ml' },
      { color: 'yellow', size: '370ml' },
      { color: 'yellow', size: '500ml' }
    ];

  describe('Filter function', function() {
    it('keeps only the desired elements', function() {

      filter.yellowOnly(cups).should.have.length(3);

      filter.yellowOnly(cups)[0].should.have.property('color').equal('yellow');
      filter.yellowOnly(cups)[1].should.have.property('color').equal('yellow');
      filter.yellowOnly(cups)[2].should.have.property('color').equal('yellow');
    });
  });

  describe('Filter function', function() {
    it('keeps only the desired elements', function() {
      filter.yellowOnlyFilter(cups).should.have.length(3);

      filter.yellowOnlyFilter(cups)[0].should.have.property('color').equal('yellow');
      filter.yellowOnlyFilter(cups)[1].should.have.property('color').equal('yellow');
      filter.yellowOnlyFilter(cups)[2].should.have.property('color').equal('yellow');
    });
  });
});
