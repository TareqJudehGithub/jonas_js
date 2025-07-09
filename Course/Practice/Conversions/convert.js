const inputYear = "1997";

// Type Conversion is where we manually convert from one type to another
const inputYearNum = Number(inputYear);
console.log(inputYearNum);

// NaN  (Not a Number) is failure of a new variable trying to produce a new
// number, like if we tried to convert a string of alphabetical into a number.
console.log(Number("Non a Number")); //NaN

// Type Coercion. Happens automatically, when JS automatically converts one
// type to another, in order to achieve a specific transaction.
console.log("23" - "10" - 3); //10

// Guess the output
let n = "1" + 1;
n = n - 1;
console.log(n);
