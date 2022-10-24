"use strict";
// document.querySelector(".message".textContent);
// //console.log(document.querySelector(".message"));
// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 12;

let random = Math.trunc(Math.random() * 20) + 1;
///document.querySelector(".number").textContent = random;
let score = 20;
let highscore;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Guessing";
  } else if (guess == random) {
    document.querySelector(".message").textContent = "Congrats right number";
    document.querySelector(".number").textContent = random;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "the number is too small";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "the number is too big";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".highscore").textContent = highscore;
