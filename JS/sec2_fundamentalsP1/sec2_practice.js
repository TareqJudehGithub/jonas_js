// Code challenge #1

//Mark and John BMI problem

// Testing Data1

// Mark BMI
const markBMIData1 = 75 / 1.69 ** 2;
console.log(markBMIData1);
// John BMI
const johnBMIData1 = 92 / 1.95 ** 2;
console.log(johnBMIData1);
// run markHigherBMI comparing both Mark's and John's BMI
let markHigherBMI = markBMIData1 > johnBMIData1;
console.log(markHigherBMI);

// Testing Data2
const markBMIData2 = 95 / 1.88 ** 2;
console.log(markBMIData2);
// John BMI
johnBMIData2 = 85 / 1.76 ** 2;
console.log(johnBMIData2);
// run markHigherBMI comparing both Mark's and John's BMI
markHigherBMI = markBMIData2 > johnBMIData2;
console.log(markHigherBMI);
console.log("\n");

// Code challenge #2

// using conditionals, announce who has higher BMI using template literals

if (markHigherBMI) {
	console.log(`Mark has higher BMI rate with ${markBMIData1}`);
} else {
	console.log(`John has higher BMI rate with ${johnBMIData1}`);
}

console.log("\n");
// Coding Challenge #3

// Dolphins average score
const dolphinsAvg = (96 + 108 + 89) / 3;

// Koalas average score
const kolasAvg = (488 + 91 + 110) / 3;
console.log(dolphinsAvg, kolasAvg);
console.log(dolphinsAvg - kolasAvg);
console.log(kolasAvg - dolphinsAvg);

if (dolphinsAvg > kolasAvg && (dolphinsAvg - kolasAvg >= 100) & (dolphinsAvg >= 100)) {
	console.log("Team Dolphin wins!");
} else if (
	(dolphinsAvg < kolasAvg && kolasAvg - dolphinsAvg >= 100) &
	(kolasAvg >= 100)
) {
	console.log("Team kolas wins!");
} else if (dolphinsAvg === kolasAvg) {
	console.log("Draw!");
} else {
	console.log("No winner today!");
}

console.log("\n");
// Coding Challenge #4

// tip = 15 if bill between 50 and 300
// tip = 20 if bill is different (less or greater than)

let tip;
let bill = 400;

bill >= 50 && bill <= 300 ? (tip = 0.15) : (tip = 0.2);
let total = bill * (1 + tip);
console.log(`Bill was ${bill}, tip was ${tip}, and the total is ${total}`);
