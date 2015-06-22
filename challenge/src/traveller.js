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
    },

    mapToRands: function(bills) {
      return _.map(bills, this.addRandsValue);
    },

    sumValues: function(bills) {
      return _.reduce(bills, function(accumulator, bill) { return accumulator + bill.valueInRands }, 0);
    }
  }
}

module.exports = Traveller;
