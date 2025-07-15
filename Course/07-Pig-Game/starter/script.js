"use strict";

// Players current score
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");

// Current Player and score
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let currentScore = 0;
let totalScore = 0;
let activePlayer = 0;
let currentPlayer = document.getElementById(`current--${activePlayer}`);

// Total score(s)
const scores = [0, 0];

// Changing score on display - Starting conditions
score0El.textContent = "0";
score1El.textContent = "0";
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// TODO Roll the dice generating a random number, and assign it to Roll button

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);

  // Show dice, and assign the result to the image source attribute.
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice === 1) {
    switchPlayer();
  } else {
    // TODO Assign roll(s) total to a player
    currentScore += dice;
    // Set the score based on the current active player
    currentPlayer.textContent = String(currentScore);
    console.log(`The active player is ${currentPlayer.id}`);
  }
});

// TODO Hold Button - save current score in an accumilated variable
btnHold.addEventListener("click", function () {
  console.log("HOLD clicked!");
  console.log(currentPlayer.id);
  console.log(activePlayer);

  // Update player's total score with the current
  scores[activePlayer] += currentScore;
  console.log(`Total score = ${scores[activePlayer]}`);

  currentPlayer.textContent = String(currentScore);
  console.log(currentPlayer.textContent);

  document.getElementById(`score--${activePlayer}`).textContent = String(
    scores[activePlayer]
  );
  // Check if any score = 100
  if (scores[activePlayer] >= 10) {
    console.log("Game Over");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
});

// Functions
function switchPlayer() {
  currentScore = 0;
  currentPlayer.textContent = String(currentScore);

  activePlayer = activePlayer === 0 ? 1 : 0;
  currentPlayer = document.getElementById(`current--${activePlayer}`);
  console.log(
    `Switch to player No. ${activePlayer}, with ID ${currentPlayer.id}`
  );
  // Change active player BG color and hide the dice
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  diceEl.classList.add("hidden");
}
