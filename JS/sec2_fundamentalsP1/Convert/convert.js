// Type Conversion
const inputYear = "1991";

const convertToNum = Number(inputYear) + 18;
console.log(typeof convertToNum, convertToNum); // >>> $ number

// Type Coercion
const concatStrNum = inputYear + 18; // number converted to string
console.log(typeof concatStrNum, concatStrNum); // >>> $ string

// @ts-ignore
console.log(32 - "10" - 10); // string converted to number
