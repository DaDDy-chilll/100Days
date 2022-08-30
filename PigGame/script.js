"use strict";
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const current0 = document.getElementById(`current--0`);
const current1 = document.getElementById(`current--1`);
let scores, activePlayer, currentScore, playing;
const init = () => {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  dice1.classList.add("hidden");
  current0.textContent = 0;
  current1.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    dice1.src = `public/dice-${dice}.png`;
    if (dice != 1) {
      dice1.classList.remove("hidden");
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      if (scores[activePlayer] >= 100) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--active");
        playing = false;
        dice1.classList.add("hidden");
      } else {
        switchPlayer();
      }
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      playing = false;
      dice1.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
