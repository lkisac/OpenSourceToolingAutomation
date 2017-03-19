#!/usr/bin/env node

const program = require('commander');

/**
 * Process command line arguments - using npm commander library
 */
program
 .option('-v, --verify <email>', 'verifies the email address given as a Seneca email')
 .option('-f, --format <name>', 'formats the name given as a Seneca email')
 .parse(process.argv);

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function(email) {
    var regex = /^\w+\@myseneca.ca$/
    var isValid = regex.test(email) ? 'valid' : 'invalid';
    return isValid;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function(name) {
    return name + "@myseneca.ca";
};

var email = program.verify;
var name = program.format;

if (program.verify) {
    console.log("email: " + email);
    console.log(exports.isValidEmail(email));
}
if (program.format) {
    console.log("name: " + name);
    console.log(exports.formatSenecaEmail(name));
}
