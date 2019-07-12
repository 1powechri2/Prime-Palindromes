const determinePrimes = require('../lib/determinePrimes')
const collectPrimes = require('../lib/collectPrimes')
const reverseNumber = require('../lib/reverseNumber')
const primePalindromes = require('../lib/primePalindromes')
const pry = require('pryjs')

test('determine a prime number', () => {
  expect(determinePrimes(5)).toBe(true);
  expect(determinePrimes(10)).toBe(false);
})

test('it can collect all Primes in a Range', () => {
  expect(collectPrimes(10)).toEqual([2, 3, 5, 7])
})

test('it can reverse a number', () => {
  expect(reverseNumber(4551)).toBe(1554)
  expect(reverseNumber(-4551)).toBe(-1554)
})

test('it can collect palindromes', () => {
  expect(primePalindromes(160)).toEqual([2, 3, 5, 7, 11, 101, 131, 151])
})
