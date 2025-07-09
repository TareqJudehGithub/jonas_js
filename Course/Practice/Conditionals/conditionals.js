const age = 17;

isEligible = age > 18;

if (isEligible) {
	console.log(`${age} is eligible`);
} else {
	console.log(`${age} is not an eligible age.`);
	console.log(`wait another ${18 - age} year(s).`);
}
console.log(`\n`);

const birthYear = 2006;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(century);
