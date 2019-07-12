module.exports = (num) => {
  var reversedNumber = num.toString().split('').reverse().join('');
  return Math.sign(num) * parseInt(reversedNumber);
}
