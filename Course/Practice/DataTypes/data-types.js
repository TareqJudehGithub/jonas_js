// Data types

// In javascript data types are determined automatically upon initializing
// variables. That is why, in JS the value has a type, not the variable.

// numbers
let age = 23;
let score = 87.5;

// Strings
let name = "John Smith";
let letter = "A";

// Bool
let isActive = true;
let isRetired = false;

// undefined  - A variable declared but 'without' yet assigning
// a value to it (empty value).
let email;

// null  - empty value
let phone = null;

// Symbol - Unique value and cannot be changed.

//BigInt - for numbers that are considered too large for int type.

// typeof() - Shows the data type of a value.
console.log(typeof letter);

console.log(typeof email);

email = "john.45@gmail.com";
console.log(typeof email);

// let  - Best used for reassigning a variable value.
let address = "Amman, Jordan";
// reassigning a value of variable (mutating a variable).
address = "Saber ST, Amman, Jordan";

// const   - For constant (fixed) values  (immutable variables)
// const always need an initial value.
const birthDate = 1975;

// let vs const
// Use const for variables you know you don't need to change it's value, and
// use let for variables that values need to change in the future.

// var   - never use var
