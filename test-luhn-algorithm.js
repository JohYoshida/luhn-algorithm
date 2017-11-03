var assert = require("chai").assert;
var check = require("./luhn-algorithm");

describe("Check", function() {
  it("should return null if parameter is not a string", function() {
    var string = 6;
    assert.isNull(check(string))
  });
  it("should return true if string passes Luhn Algorithm", function() {
    var string = "79927398713";
    assert.isTrue(check(string));
  });
  it("should return false if string fails Luhn Algorithm", function() {
    var string = "1234";
    assert.isFalse(check(string));
  });
});
