'use strict';

//let number = document.querySelector('.number');

let message = document.querySelector('.message');
const scoreTitle = document.querySelector('.label-score').textContent;
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let input = document.querySelector('.guess');
const againBtn = document.querySelector('.again');

// Check button
let check = document.querySelector('#check');
highscore.textContent;

// Secret number
function rollSecretNum() {
  const secretNum = Math.trunc(Math.random() * 20 + 1);
  return secretNum;
  //(number.textContent = String(secretNum));
}
let secretNum = rollSecretNum();

score.textContent = '20';
highscore.textContent = '0';

let scoreNum = 20;
let highscoreNum = 0;

console.log(`Highscore = ${highscoreNum}`);
console.log(`Secret Number: ${secretNum}`);

// Events
// Check input field saved in a variable
check.addEventListener('click', function () {
  const guessValue = Number(input.value);

  // Check button event
  if (!guessValue) {
    message.textContent = 'No number entered!';
    console.log('No number entered!');
  } else if (secretNum === guessValue) {
    message.textContent = `It is indeed ${secretNum}`;
    console.log(`Correct! The secret number is indeed ${secretNum}!`);
    highscoreNum++;
    highscore.textContent = String(highscoreNum);
    console.log(highscore.textContent);
  } else if (guessValue < secretNum) {
    message.textContent = `You guessed lower than the Secret Number!`;
    scoreNum--;
    score.textContent = String(scoreNum);
  } else if (guessValue > secretNum) {
    message.textContent = `You guessed higher than the Secret Number!`;
    scoreNum--;
    score.textContent = String(scoreNum);
  } else {
    message.textContent = 'Please try again.';
    console.log(`${guessValue} is not the secret number :(\nPlease try again.`);
  }
  if (scoreNum === 0) {
    message.textContent = 'Game Over!';
  }
  console.log(`Attempts left: ${score.textContent}`);
});

// again button (reset game) event
againBtn.addEventListener('click', function () {
  secretNum = rollSecretNum();
  console.log(`Secret Number: ${secretNum}`);
  score.textContent = '20';
  message.textContent = 'Start guessing...';
});
