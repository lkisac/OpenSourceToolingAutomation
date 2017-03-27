// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a non-String', function() {
    var nonStringAddress = 1;
    expect(seneca.isValidEmail(nonStringAddress)).toBe(false);
  });

  test('returns false for null passed in', function() {
    var nullVal = null;
    expect(seneca.isValidEmail(nullVal)).toBe(false);
  });

  test('returns false for leading whitespace', function() {
    var leadingWhitespaceString = " lkisac@myseneca.ca";
    expect(seneca.isValidEmail(leadingWhitespaceString)).toBe(false);
  });

  test('returns true for professor format email', function() {
    var professorEmail = "david.humphrey@senecacollege.ca";
    expect(seneca.isValidEmail(professorEmail)).toBe(true);
  });

  test('returns true for professor alternate format email', function() {
    var professorAlternateEmail = "david.humphrey@senecac.on.ca";
    expect(seneca.isValidEmail(professorAlternateEmail)).toBe(true);
  });

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('returns false for name containing spaces', function() {
    var name = "lk isac";
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });

  test('returns false for name containing tabs', function() {
    var name = "lk  isac";
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });

});