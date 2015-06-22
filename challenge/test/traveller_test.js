var expect = require('expect.js');
var Traveller = require('../src/traveller.js');

describe('Traveller', function() {
  describe('with a collection of receipts', function() {

    var receipts = [
      { city: "Johannesburg" },
      { city: "Uganda" }
    ];

    it('filters ZA\'s ones out', function() {
      var traveller = new Traveller();
      expect(traveller.filterBills(receipts)).to.have.length(1);
      expect(traveller.filterBills(receipts)).to.eql([{ city: 'Uganda' }]);
    });
  });

  describe('with the currencies exchange rates in hand', function() {
    var rates = {
      'Shilling': 0.0003,
      'Lilangeni': 1
    };

    describe('with a receipt from Kampala', function() {
      var receiptFromKampala = {
        city: 'Uganda',
        currency: 'Shilling',
        value: '10000'
      };

      it('calculates the value in Rands', function() {
        var traveller = new Traveller(rates);
        var transformedReceipt = traveller.addRandsValue(receiptFromKampala);

        expect(transformedReceipt.valueInRands).to.eql(3);
      });
    });

    describe('with a receipt from Swaziland', function() {
      var receiptFromSwaziland = {
        city: 'Mbabane',
        currency: 'Lilangeni',
        value: '50'
      };

      it('calculates the value in Rands', function() {
        var traveller = new Traveller(rates);
        var transformedReceipt = traveller.addRandsValue(receiptFromSwaziland);

        expect(transformedReceipt.valueInRands).to.eql(50);
      });
    });
  });
});
