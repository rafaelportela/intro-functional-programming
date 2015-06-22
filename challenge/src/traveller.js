var _ = require('underscore');

function Traveller(exchangeRates) {

  var rates = exchangeRates;

  return {
    filterBills: function(bills) {
      return _.filter(bills, function(bill) { return bill.city !== 'Johannesburg' });
    },

    addRandsValue: function(bill) {
      var selectedRate = rates[bill.currency];
      return _.extend(bill, {valueInRands: (bill.value * selectedRate).toPrecision(2) });
    }
  }
}

module.exports = Traveller;
