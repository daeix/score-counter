"use strict";

let resultHome = document.getElementById("home");
let resultGuest = document.getElementById("guest");
let count = 0;
let countG = 0;

function addOne() {
  count = count + 1;
  resultHome.textContent = count;
}

function addTwo() {
  count = count + 2;
  resultHome.textContent = count;
}

function addThree() {
  count = count + 3;
  resultHome.textContent = count;
}

function addOneG() {
  countG = countG + 1;
  resultGuest.textContent = countG;
}

function addTwoG() {
  countG = countG + 2;
  resultGuest.textContent = countG;
}

function addThreeG() {
  countG = countG + 3;
  resultGuest.textContent = countG;
}

function resetGame() {
  count = 0;
  resultHome.textContent = count;
  countG = 0;
  resultGuest.textContent = count;
}
