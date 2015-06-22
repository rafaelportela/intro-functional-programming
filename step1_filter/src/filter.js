var _ = require('underscore');

var imperativeFilter = function(cups) {
  var yellows = [];

  for (var i = 0; i<cups.length; i++) {
    if (cups[i].color === 'yellow') {
      yellows.push(cups[i]);
    }
  }

  return yellows;
}

exports.imperativeFilter = imperativeFilter;

var functionalFilter = function(cups) {

  // predicate: function retuning true or false
  var ifYellow = function(cup) {
    return cup.color === 'yellow';
  };

  // filter the collection based on the criteria
  return _.filter(cups, ifYellow);
};

exports.functionalFilter = functionalFilter;

