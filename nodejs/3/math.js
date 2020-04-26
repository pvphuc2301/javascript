var math = {
    add: function(a, b) {
      return a + b;
    },
    sum: function(arr) {
        return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
  };
  
  module.exports = math;