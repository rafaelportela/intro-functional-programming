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
        value: 100000
      };

      it('calculates the value in Rands', function() {
        var traveller = new Traveller(rates);
        var transformedReceipt = traveller.addRandsValue(receiptFromKampala);

        expect(transformedReceipt.valueInRands).to.be(30);
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

        expect(transformedReceipt.valueInRands).to.be(50);
      });
    });

    describe('collection of receipts from outside ZA', function() {
      var receipts = [
        {
          city: 'Mbabane',
          currency: 'Lilangeni',
          value: 50
        },
        {
          city: 'Mbabane',
          currency: 'Lilangeni',
          value: 70
        },
        {
          city: 'Uganda',
          currency: 'Shilling',
          value: 100000
        }
      ];

      it('adds values in Rands to all', function() {
        var traveller = new Traveller(rates);
        var receiptsWithRandValues = traveller.mapToRands(receipts);

        expect(receiptsWithRandValues[0].valueInRands).to.be(50);
        expect(receiptsWithRandValues[1].valueInRands).to.be(70);
        expect(receiptsWithRandValues[2].valueInRands).to.be(30);
      });

    });

    describe('with a collection of receipts with Rand values', function() {
      var receipts = [
        { valueInRands: 50 },
        { valueInRands: 70 }
      ];

      it('sums all values', function() {
        var traveller = new Traveller();

        expect(traveller.sumValues(receipts)).to.be(120);
      });
    });

    describe('having the currencies convertion rates', function() {
      var convertionRates = {
        'Shilling': 0.0003,
        'Lilangeni': 1
      };

      describe('with receipts from all over the places', function() {
        var receipts = [
          {
            city: 'Mbabane',
            currency: 'Lilangeni',
            value: 50
          },
          {
            city: 'Johannesburg',
            currency: 'Rands',
            value: 32
          },
          {
            city: 'Mbabane',
            currency: 'Lilangeni',
            value: 70
          },
          {
            city: 'Uganda',
            currency: 'Shilling',
            value: 100000
          }
        ];

        it('converts to rands and sum all values excluding ZA', function() {
          var traveller = new Traveller(convertionRates);

          expect(traveller.costOfTrip(receipts)).to.be(150);
        });
      });
    });
  });
});
