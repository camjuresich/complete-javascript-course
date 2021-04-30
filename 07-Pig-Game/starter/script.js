'use strict';

let turn = 0;
let diceCurr;
let currentScore = 0;
const playerScores = [0, 0];
let randy = () => Math.floor((Math.random() * 6) + 1);
//const player1 = document.getElementById()
const rollBtn = document.getElementsByClassName('btn--roll')[0];
const holdBtn = document.getElementsByClassName('btn--hold')[0];
const dice = document.getElementsByClassName('dice')[0];
const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');

function init() {
  player1Score.textContent = playerScores[0] = 0;
  player2Score.textContent = playerScores[1] = 0;
  dice.classList.add('hidden');
}

rollBtn.addEventListener("click", function(){
  diceCurr = randy();
  dice.src = `dice-${diceCurr}.png`
  dice.classList.remove('hidden')
  if (diceCurr === 1) {
    turn === 0 ? turn = 1 : turn = 0;
    currentScore = 0;
  }

})

init();