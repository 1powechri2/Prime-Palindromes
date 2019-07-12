const determinePrimes = require('./determinePrimes')

module.exports = (num) => {
  var arr = []

  for(var i = 2; i <= num; i++) {
    if(determinePrimes(i)) {
      arr.push(i);
    }
  }
  return arr;
}
