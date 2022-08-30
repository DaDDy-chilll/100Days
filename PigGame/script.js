"use strict";
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);

const scores = [0, 0];
let activePlayer = 0;
// const current = document.getElementById(`current--${activePlayer}`);
let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;
dice1.classList.add("hidden");

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  dice1.src = `public/dice-${dice}.png`;
  if (dice != 1) {
    dice1.classList.remove("hidden");
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // console.log(currentScore);
  } else {
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
  } else {
    switchPlayer();
  }
});
