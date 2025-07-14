'use strict';

// Game logic variables
let number = document.querySelector('.number');
let message = document.querySelector('.message');
const scoreTitle = document.querySelector('.label-score').textContent;
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let input = document.querySelector('.guess');
const againBtn = document.querySelector('.again');

// CSS variables

// Check button
let check = document.querySelector('#check');
highscore.textContent;

// Secret number
function rollSecretNum() {
  const secretNum = Math.trunc(Math.random() * 20 + 1);
  return secretNum;
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
  // No entry
  if (!guessValue) {
    message.textContent = 'No number entered!';
    console.log('No number entered!');
  }
  // Player wins
  else if (secretNum === guessValue) {
    // Change bg and font size
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').computedStyleMap.width = '30rem';
    message.textContent = `It is indeed ${secretNum}`;

    number.textContent = String(secretNum);
    console.log(`Correct! The secret number is indeed ${secretNum}!`);

    if (scoreNum > highscoreNum) {
      highscoreNum = scoreNum;
      highscore.textContent = String(highscoreNum);
    }

    console.log(highscore.textContent);
  }
  // Guessed number lower than secret number
  else if (guessValue < secretNum) {
    message.textContent = `You guessed lower than the Secret Number!`;
    scoreNum--;
    score.textContent = String(scoreNum);
  }
  // Guessed number higher than secret number
  else if (guessValue > secretNum) {
    message.textContent = `You guessed higher than the Secret Number!`;
    scoreNum--;
    score.textContent = String(scoreNum);
  } else {
    message.textContent = 'Please try again.';
    console.log(`${guessValue} is not the secret number :(\nPlease try again.`);
  }
  // No more attempts left
  if (scoreNum === 0) {
    message.textContent = 'Game Over!';
  }
  console.log(`Attempts left: ${score.textContent}`);
});

// again button (reset game) event
againBtn.addEventListener('click', function () {
  number.textContent = '?';
  secretNum = rollSecretNum();
  console.log(`Secret Number: ${secretNum}`);
  scoreNum = 20;
  score.textContent = '20';
  message.textContent = 'Start guessing...';
  input.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').computedStyleMap.width = '15rem';
  console.log(scoreNum);
});
