// Conditionals

const age = 15;

if (age >= 18) {
	console.log("You can drive! 😎");
} else {
	console.log("sorry, but you still can'n drive 😒");
	const yearsToDrive = 18 - age;
	console.log(`You still have ${yearsToDrive} years left.`);
}

console.log("\n");

let century;
const birthYear = 2001;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(century);

console.log("\n");

// comparison operators === and ==
// === is strict and does not perform type coercion, == however does.

if (age === 18) {
	console.log("You're qualified for this program.");
} else {
	console.log("You're not qualified yet.");
}
console.log("\n");

console.log(10 === "10"); //false
console.log(10 == "10"); //true

console.log("\n");
console.log("👌");

const favorite = Number(prompt("What's your favorite number? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 10) {
	console.log("Nice!");
} else if (favorite === 15) {
	console.log("OK this is still nice.");
} else {
	console.log("Not nice at all!");
}

if (favorite != 10 && favorite != 15) {
	console.log("User entered  a diff number.");
}
