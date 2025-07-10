console.log("Arrays");
/* 
Arrays are not a primitive variables therefor arrays are not immutable, and their
values can be changed.
*/

const friends = ["John", "Sarah", "Steven", "Ana", "Peter"];
const years = new Array(1994, 1998, 2002);

console.log(`Your first friend is ${friends[0]}`);
console.log(`Your last friend is ${friends[friends.length - 1]}`);
console.log(`You have a total of ${friends.length} friends!`);

// change friend/item name in an array
friends[2] = "Steve";

const tareq = ["Tareq", "Judeh", 2025 - 1975, "Web Developer", friends];
console.log(tareq);

// Exercise
const calcAge = function (birthYear) {
	return 2025 - birthYear;
};

const birthyearsArr = [1975, 1981, 2006, 2011];

const ageOne = calcAge(birthyearsArr[0]);
const ageTwo = calcAge(birthyearsArr[1]);
const ageLast = calcAge(birthyearsArr[birthyearsArr.length - 1]);
console.log(ageOne, ageTwo, ageLast);

const ages = [ageOne, ageTwo, ageLast];
console.log(ages);

// Array Methods in JS
// push() - add a new element to the END of an array
friends.push("Ralphie");
console.log(friends);

// push() can return the length of the new mutated array
console.log(friends.push("Goldie")); // 7

// unshift() - - add a new element to the BEGINNING of an array
friends.unshift("Winnie");
console.log(friends);

// pop () - removes the last element of an array
friends.pop();
console.log(friends);

// shift() - removes the first element of an array
friends.shift();
console.log(friends);

// indexof("element string") - Returns the index number of an existing element.
console.log(friends.indexOf("Peter")); //4

// includes() checks with strict equality and returns true/false if an element does exist inside an array.
console.log(friends.includes("El Kitten"));

friends.push("El Kitten");
console.log(friends.includes("El Kitten"));

if (friends.includes("El Kitten")) {
	console.log("Meeoo!! Milch!");
}
