const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); // && operator true
console.log(hasDriverLicense || hasGoodVision); // || operator true
console.log(!hasDriverLicense && hasGoodVision); // ! not operatorfalse

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
	console.log("You can drive!");
} else {
	console.log("You cannot drive.");
}

const isTired = false;
if (hasDriverLicense && hasGoodVision && !isTired) {
	console.log("You can drive!");
} else {
	console.log("You cannot drive.");
}
