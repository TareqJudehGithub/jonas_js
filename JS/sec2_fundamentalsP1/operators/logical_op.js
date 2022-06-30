/* Logical operators

 && and  operator  all conditions should be true, else false.
 || or   operator  if one of the conditions is true, returns true.
 != not  operator  invert true to be false, and visa versa.
*/
const age = 16;

if (age === 16) {
	console.log(true);
}

if (age != 16) {
	console.log(false);
}

console.log("\n");

const hasLicense = true;
const hasVision = false;

// and logical operator
console.log("and");

if (hasLicense && hasVision) {
	console.log(true);
} else {
	console.log(false);
}

console.log(" ");

console.log("or");
// or logical operator
if (hasLicense || hasVision) {
	console.log(true);
}

console.log(" ");
console.log("not !");
// not
console.log(!hasLicense);

console.log(" ");

if (hasLicense && hasVision) {
	console.log("you can drive!");
} else {
	console.log("You can't drive, sorry!");
}

console.log("");
console.log("Switch statement");

/* switch (variable) {
      case (condition):
        return something
}     case (condition):
        return something
      default:
        return something
*/

const day = "Sunday";
switch (day) {
	case "Monday":
		console.log(`${day} Frontend practice`);
		break;
	case "Tuesday":
		console.log(`${day} Backend practice`);
		break;
	case "Wednesday":
		console.log(`${day} DevOps`);
		break;
	case "Thursday":
		console.log(`${day} Project`);
		break;
	case "Friday":
	case "Saturday":
		console.log(`${day} Holiday`);
		break;
	case "Sunday":
		console.log(`${day} Python`);
		break;
	default:
		console.log(`${day} Not a valid day`);
}

console.log("");
console.log("Ternary Operator statement");

const luckyNumber = 100;
78 === luckyNumber ? console.log("You guessed it!") : console.log("No you lose!");
100 === luckyNumber ? console.log("You guessed it!") : console.log("No you lose!");

console.log("");

let drink;
let my_age = 46;
console.log(`I like to drink ${my_age >= 18 ? "coffee ☕" : "🥛"}`);
