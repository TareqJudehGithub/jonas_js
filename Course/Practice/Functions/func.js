/* 
Functions
 - A peace/block of code that can be used more than on time.

*/

// Function Declaration
function logger() {
	// function header
	console.log("My name is John Smith"); // function body
}
logger(); // Invoking, calling, or running the function.

console.log("\n");

// Function expression
const calcUserAge = function calcAge(birthYear) {
	const userAge = 2025 - birthYear;
	return `Your age is ${userAge} years old!`;
};

console.log(calcUserAge(1975));

// Arrow function
const arrowFuncExample = (usrName) => console.log(`Hi ${usrName}!`);
arrowFuncExample("Sarah Adams");

const yearsUntilRetirement = (employee, birthOfYear) => {
	const age = 2025 - birthOfYear;
	const retirement = 60 - age;
	return `${employee}, you still got ${retirement} years to retire.`;
};
console.log(yearsUntilRetirement("Ali", 1975));

// One function calling another.
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} apple(s) and ${orangePieces} orange(s).`;
	return juice;
}
const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);
