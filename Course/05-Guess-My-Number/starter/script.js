'use strict';

let message = document.querySelector('.message');
console.log(message);

const scoreTitle = document.querySelector('.label-score').textContent;
const score = document.querySelector('.score').textContent;
const number = (document.querySelector('.number').textContent = '13');

let input = document.querySelector('.guess');

// Check button
let check = document.querySelector('#check');

// Check input field saved in a variable
check.addEventListener('click', function () {
  const guessValue = Number(input.value);
  // if no input
  if (!guessValue) {
    message.textContent = 'No number entered!';
  } else {
    console.log(guessValue, typeof guessValue);
  }
});

console.log(scoreTitle);
console.log(score);
console.log(number);

// console.log(input.value);
