const firstName = "John";
const lastName = "SMith";
const birthYear = 1975;
const year = 2025;
const age = year - birthYear;

// Template strings literals using backticks ``
const person = `${firstName} ${lastName} age is ${age} years old.`;
console.log(person);

console.log(`Line one
  Line two
  Line three`);
