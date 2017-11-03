/**
 * Checks a number against the Luhn Algorithm
 * @param  {String} string string containing number you want to check
 * @return {Null}          returns null if "string" is not a string
 * @return {Bool}          returns true if number passes Luhn Algorithm
 */
function check(string) {
  if (typeof string !== "string") {
    return null;
  }
  // add last digit to sum
  var sum = Number(string[string.length-1]);

  var numDigits = string.length;
  var parity = numDigits % 2;
  for (var i = numDigits - 2; i >= 0; i--) {
    var digit = Number(string[i]);
    if (i % 2 === parity) {
      digit = digit * 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return (sum % 10 === 0);
}
console.log(check("aaa"));

module.exports = check;
