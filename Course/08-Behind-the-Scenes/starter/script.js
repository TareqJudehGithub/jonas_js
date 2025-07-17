'use strict';

// global variable
const firstName = 'John';

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  const firstName = 'Sarah';
  console.log(this);
  function printAge() {
    const output = `You are ${firstName}, ${age} old, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1971 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and u're a millenial, ${firstName}`;
    }

    console.log(millenial); // var is global variable.
  }
  printAge();

  return age;
}
calcAge(1975);

const arrowFun = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};
arrowFun(1975);

function Age(birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
}

Age(1975);
