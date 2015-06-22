var _ = require('underscore');

function Traveller(exchangeRates) {

  var convertWithRates = function(rates) {
    return function(bill) {
      var selectedRate = rates[bill.currency];
      return _.extend(bill, {valueInRands: parseFloat((bill.value * selectedRate).toPrecision(2)) });
    }
  }

  return {
    filterBills: function(bills) {
      return _.filter(bills, function(bill) { return bill.city !== 'Johannesburg' });
    },

    addRandsValue: convertWithRates(exchangeRates),

    mapToRands: function(bills) {
      return _.map(bills, this.addRandsValue);
    },

    sumValues: function(bills) {
      return _.reduce(bills, function(accumulator, bill) { return accumulator + bill.valueInRands }, 0);
    },

    costOfTrip: function(bills) {
      return this.sumValues(
               this.mapToRands(
                 this.filterBills(bills)));
    }
  }
}

module.exports = Traveller;
