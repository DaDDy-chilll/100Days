"use strict";
const message = document.querySelector(".message");
const scoreContent = document.querySelector(".score");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const highScore = document.querySelector(".highscore");

const luckyNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(scoreContent.textContent);
let hScore = highScore.textContent;

check.addEventListener("click", function () {
  if (!guess.value) {
    message.textContent = "No Number...";
  } else if (guess.value == luckyNumber) {
    number.textContent = luckyNumber;
    body.style.background = "green";
    number.style.width = "30rem";
    message.textContent = "Correct Number...";
    if (score > hScore) {
      hScore = score;
      highScore.textContent = hScore;
    }
  } else if (guess.value > luckyNumber) {
    if (score > 0) {
      message.textContent = "Too High Number...";
      score--;
      scoreContent.textContent = score;
    } else {
      message.textContent = "You Lose Game...";
      scoreContent.textContent = 0;
    }
  } else if (guess.value < luckyNumber) {
    if (score > 0) {
      message.textContent = "Too Low Number...";
      score--;
      scoreContent.textContent = score;
    } else {
      message.textContent = "You Lose Game...";
      scoreContent.textContent = 0;
    }
  }
});

again.addEventListener("click", function () {
  number.textContent = "?";
  body.style.background = "#222";
  number.style.width = "15rem";
  message.textContent = "Start guessing...";
  scoreContent.textContent = 20;
  guess.value = "";
});
