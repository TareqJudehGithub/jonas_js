console.log("for loop in JS\n");

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

console.log("\n");

const person = ["John Smith", 1975, "john.smith@gmail.com", "Florida, USA"];
for (let i = 0; i < person.length; i++) {
	console.log(person[i]);
}
console.log("\n");
const types = [];

for (let i = 0; i < person.length; i++) {
	console.log(person[i], "is a " + typeof person[i]);
	types.push(typeof person[i]);
}

for (let i = 0; i < types.length; i++) {
	console.log(types[i]);
}

console.log("\n\n");
const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
	const age = 2025 - birthYears[i];
	ages.push(age);
}

console.log(ages);
console.log("\n");

// continue + break;

const numbers = [24, 31, 45, 78, 99, 100, 88, 1000];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === 1000) {
		console.log("Aborting loop!");
		break;
	} else if (numbers[i] % 2 == 0) {
		continue;
	}
	console.log(`${numbers[i]} is an odd number.`);
}
