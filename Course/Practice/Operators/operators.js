//  = is an assignment operator
let currentYear = 2025;
const birthYear = 1975;

const age = currentYear - birthYear;
console.log(age);

// Use + to concatenate strings together

const firstName = "John";
const lastName = "Smith";
const fullName = firstName + " " + lastName;
console.log(fullName);

//  Math operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++; // increments 1
console.log(x);

// Comparison operators  - returns true of false
console.log(18 > age);
console.log(65 > age);

const isOldEnough = 65 > age;
console.log(isOldEnough);

// Equality operators == and ===

if (age === 18) {
	console.log("You just became an adult");
} else if (age > 18) {
	console.log("You're an adult");
} else {
	console.log("You're not 18 yet");
}

//
const favNum = 18;
// const favNum = Number(prompt("What is your favorite number?"));
if (favNum === 23) {
	console.log(`Your Number is ${favNum}`);
} else if (favNum === 7) {
	console.log(`Number is ${favNum}`);
} else {
	console.log("Not a number");
}

// The 'not' operator
if (favNum !== 100) {
	console.log("Not a 100");
	1;
}

// Bool operators

const hasDrivingLicense = true;
const hasGoodVision = false;

if (hasDrivingLicense && hasGoodVision) {
	console.log("Sarah can drive");
} else if (hasDrivingLicense || hasGoodVision) {
	console.log("Sarah can drive, but only during the daylight.");
} else {
	console.log("Sarah should not be driving");
}
