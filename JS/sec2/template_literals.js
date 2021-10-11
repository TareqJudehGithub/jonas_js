// Template Literals

const firstName = "Jonas";
const job = "teacher".toUpperCase();
const year = 2021;
const birthYear = 1991;

// Before ES6
const jonas =
	'I"m ' +
	firstName +
	", a " +
	(year - birthYear) +
	" years old." +
	"I work as a " +
	job;
console.log(jonas);
console.log("\n"); // provides 2 line spacing between lines

// ES6 format template literals using  ``  (backtick sign)
const jonasNew = `I\'m ${firstName}, a ${year - birthYear} years old. I\"m a ${job}.`;
console.log(jonasNew);
console.log("Hello, world!");
console.log("");
console.log("Hello, world!");
console.log("\r"); // provides 1 line spacing between lines
console.log("Hello, \nworld!");
