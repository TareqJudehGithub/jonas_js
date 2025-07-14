"use strict";

// Players current score
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Changing score on display - Starting conditions
score0El.textContent = "0";
score1El.textContent = "0";
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--new");

let currentScore = 0;

// TODO Roll the dice generating a random number, and assign it to Roll button

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);

  console.log(`Roll the dice: ${dice}`);

  // Show dice, and assign the result to the image source attribute.
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice === 1) {
    // reset current player counter
    currentScore = 0;
    current0El.textContent = "0";
    console.log(`Counter total = ${currentScore}`);

    // Switch to the other player
  } else {
    // TODO Assign roll(s) total to a player
    currentScore += dice;
    current0El.textContent = String(currentScore);
    console.log(current0El.textContent);

    console.log(`Counter total = ${currentScore}`);
  }
});
