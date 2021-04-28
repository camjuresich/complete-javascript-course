'use strict';

let turn = 0;
let diceCurr;
let randy = () => Math.floor((Math.random() * 6) + 1);
//const player1 = document.getElementById()
const rollBtn = document.getElementsByClassName('btn--roll')[0];
const holdBtn = document.getElementsByClassName('btn--hold')[0];

rollBtn.addEventListener("click", function(){

  diceCurr = randy();
  const dice = document.getElementsByClassName('dice')[0]
  dice.src = `dice-${diceCurr}.png`
  console.log(diceCurr)
})