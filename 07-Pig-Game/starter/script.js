'use strict';

let turn = 0;
let diceCurr;
let currentScore = 0;
const playerScores = [0, 0];
let randy = () => Math.floor((Math.random() * 6) + 1);
const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1')
const rollBtn = document.getElementsByClassName('btn--roll')[0];
const holdBtn = document.getElementsByClassName('btn--hold')[0];
const newGameBtn = document.getElementsByClassName('btn--new')[0];
const dice = document.getElementsByClassName('dice')[0];

const updateTotalPlayerScore = function(playerTurn) {
  return document.getElementById(`score--${playerTurn}`)
}
const updateCurrentScore = function(playerTurn) {
  return document.getElementById(`current--${playerTurn}`)
}

function init() {
  currentScore = 0;
  turn = 0;
  for (let i = 0; i < 2; i++) {
    updateCurrentScore(i).textContent = 0;
    updateTotalPlayerScore(i).textContent = 0;
    playerScores[i] = 0;
  }

  player1Score.textContent = playerScores[0] = 0;
  player2Score.textContent = playerScores[1] = 0;
  holdBtn.classList.remove('hidden')
  rollBtn.classList.remove('hidden')
  holdBtn.disabled = false;
  rollBtn.disabled = false;
  document.getElementsByClassName('player--0')[0].classList.add('player--active')
  document.getElementsByClassName('player--1')[0].classList.remove('player--active')
  document.getElementsByClassName('player--0')[0].classList.remove('player--winner')
  document.getElementsByClassName('player--1')[0].classList.remove('player--winner')
  document.getElementById('name--0').textContent = 'player 1'
  document.getElementById('name--1').textContent = 'player 2'




}

function checkWin() {
  let win = false;
  if (playerScores[0] > 99) {
    win = true;
    document.getElementsByClassName('player--0')[0].classList.add('player--winner')
    document.getElementById('name--0').textContent = 'Winner!!!'
  }
  if (playerScores[1] > 99) {
    win = true;
    document.getElementsByClassName('player--1')[0].classList.add('player--winner');
    document.getElementById('name--1').textContent = 'Winner!!!'

  }
  if (win === true) {
    holdBtn.disabled = true;
    rollBtn.disabled = true;
    holdBtn.classList.add('hidden')
    rollBtn.classList.add('hidden')
    document.getElementsByClassName('player')[1].classList.remove('player--active')
    document.getElementsByClassName('player')[0].classList.remove('player--active')
  }
}


function changeTurn() {
  updateCurrentScore(turn).textContent = 0;
  turn === 0 ? turn = 1 : turn = 0;
  currentScore = 0;
  dice.classList.add('hidden');
  // dice.classList.remove('visible');
  for (var item of document.getElementsByClassName('player')) {
    item.classList.toggle('player--active')
  }

  holdBtn.disabled = true;
}

rollBtn.addEventListener("click", function() {
  holdBtn.disabled = false;
  dice.classList.remove('hidden')
  // dice.classList.add('visible')
  diceCurr = randy();
  dice.src = `dice-${diceCurr}.png`

  if (diceCurr === 1) {
    changeTurn();
  } else {
    currentScore += diceCurr;
    updateCurrentScore(turn).textContent = currentScore;
  }
})

holdBtn.addEventListener('click', function() {
  playerScores[turn] += currentScore;
  updateTotalPlayerScore(turn).textContent = playerScores[turn];
  changeTurn();
  checkWin();
})

newGameBtn.addEventListener('click', function() {
  return init();
})

init();