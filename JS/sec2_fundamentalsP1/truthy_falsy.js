/* 
Truthy and Falsy in JS
	- Falsy value will become false, when we try to convert them to boolean.
	- Falsy values are:  
			0
			"" 
			undefined
			null
			NaN
	- everything else is considered truthy.
	- Note:  undefined values does not accept const, only let
*/
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("jonas")); // true
console.log(Boolean(NaN)); // false

console.log("\n");

const money = 0; // 0 will be converted to false

if (money) {
	console.log('Don"t spend it all!');
} else {
	console.log("No money!");
}

let height; // undefined will automatically will be converted to a boolean (false)

if (height) {
	console.log("Yes True");
} else {
	console.log("No False (Undefined)!");
}
