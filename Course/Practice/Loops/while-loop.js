console.log("While loop\n");

let rep = 20;

while (rep > 0) {
  console.log(rep);
  rep--;
}
console.log("\n");
let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
  console.log(`You roll a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice === 6) {
    console.log(`You roll a ${dice}. Stopping rolls.`);
    break;
  }
}

console.log("");

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Loops exercise: Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}
console.log(tips);
console.log(totals);

console.log("");

function calcAverage(arr) {
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
}

const totalsAvg = calcAverage(totals);
console.log(totalsAvg);
