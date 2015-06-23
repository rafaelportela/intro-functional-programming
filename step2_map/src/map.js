var _ = require('underscore');

var imperativeMap = function(sweets) {
  var newSweets = [];

  for (var i = 0; i<sweets.length; i++) {
    newSweets.push({
      name: sweets[i].description,
      price: sweets[i].value
    });
  }

  return newSweets;
};

var functionalMap = function(sweets) {
  var withNewProperties = function(sweet) {
    return {
      name: sweet.description,
      price: sweet.value
    };
  };

  return _.map(sweets, withNewProperties);
};

exports.imperativeMap = imperativeMap;
exports.functionalMap = functionalMap;
