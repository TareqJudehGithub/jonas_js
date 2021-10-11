// Type Conversion - to convert from 1 data type to another.

const inputYear = "1991";
console.log(typeof inputYear);

// convert string to integer

const int_inputYear = Number(inputYear);
console.log(int_inputYear);

// Note: strings are immutable, that's why we have to create a new variable.
console.log(typeof String(23));

// Type Coercion in JS
// type coercion automatically converts data types.
console.log("Hi, my age is " + 46 + " years old."); // 46 was automatically was
// converted to string.

// With operators, JS converts all strings to numbers except the addition + op.

// quiz
console.log("11" - 1); // JS converts '11' to 11,  11 - 1 = 10
