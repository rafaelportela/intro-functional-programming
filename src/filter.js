var filter = {
  yellowOnly: function(cups) {
    var yellows = [];

    for (var i = 0; i<cups.length; i++) {
      var cup = cups[i];

      if (cup['color'] === 'yellow') {
        yellows.push(cup);
      }
    }

    return yellows;
  },

  yellowOnlyFilter: function(cups) {
    var ifYellow = function(cup) {
      return cup['color'] === 'yellow';
    };
    return cups.filter(ifYellow);
  }
};

module.exports = filter;
