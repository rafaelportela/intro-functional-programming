var _ = require('underscore');

var imperativeReduce = function(products) {
  var totalCost = 0;
  for (var i=0; i<products.length; i++) {
    totalCost += products[i].value;
  }
  return totalCost;
}

var functionalReduce = function(products) {
  return _.reduce(products, function(sum, prod) { return sum + prod.value; }, 0);
};

module.exports.imperativeReduce = imperativeReduce;
module.exports.functionalReduce = functionalReduce;
