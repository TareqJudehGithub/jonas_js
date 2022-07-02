/* 
Equality Operators in JS
 - The strict operator ===
  - === DOEST NOT perform type coercion, so in order for === to return true, both 
    operands should be of the same exact data type and value
 - equal operator ==
  - The equal operator does perform a type coercion between two different data types.

 - Always use the strict operator to avoid bugs.
 - Always manually convert values before comparing values.
*/

const age = 18;
// @ts-ignore
if (age === "18") {
	console.log("You're an adult!");
} else {
	console.log("You're still underage.");
}

// @ts-ignore
if (age == "18") {
	console.log("You're an adult!");
} else {
	console.log("You're still underage.");
}
