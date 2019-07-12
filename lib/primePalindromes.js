const collectPrimes = require('./collectPrimes')
const reverseNumber = require('./reverseNumber')

module.exports = (num) => {
  var primes = collectPrimes(num);
  var count = primes.length;
  arr = []

  for(var i = 0; i < count; i++) {
    if(primes[i] === reverseNumber(primes[i])) {
      arr.push(primes[i]);
    }
  }
  return arr;
}
