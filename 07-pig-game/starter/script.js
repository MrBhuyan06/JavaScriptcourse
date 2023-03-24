'use strict';

//Select element
const score0Ele = document.querySelector('#score--0');
const score01Ele = document.querySelector('#score--1');
const diceEle = document.querySelector('.dice');
const btndDiceRoller = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const dicepic = document.querySelector('.dice');
const currentEle0 = document.querySelector('#current--0');
const currentEle1 = document.querySelector('#current--1');
const playerEle0 = document.querySelector('.player--0');
const playerEle1 = document.querySelector('.player--1');

score0Ele.textContent = 0;
score01Ele.textContent = 0;
diceEle.classList.add('hidden');

//State Variable
let currentScore;
let activePlayer;
let score;
let matchActive;
const init = function () {
  activePlayer = 0;
  currentScore = 0;
  matchActive = true;
  score = [0, 0];

  score0Ele.textContent = 0;
  score01Ele.textContent = 0;
  currentEle0.textContent = 0;
  currentEle1.textContent = 0;

  diceEle.classList.add('hidden');

  playerEle0.classList.remove('player--winner');
  playerEle1.classList.remove('player--winner');
  playerEle0.classList.add('active--player');
  playerEle1.classList.remove('active--player');
};
init();
// function
const randomNumberGenarater = function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  return number;
};
//Switc Palyer
const switchPLayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEle0.classList.toggle('player--active');
  playerEle1.classList.toggle('player--active');
};

btndDiceRoller.addEventListener('click', function () {
  if (matchActive) {
    diceEle.classList.remove('hidden');
    const randomNumber = randomNumberGenarater();
    dicepic.src = `dice-${randomNumber}.png`;

    // Condition
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch Player
      switchPLayer();
    }
  }
});

// Work On hold
btnHold.addEventListener('click', function () {
  if (matchActive) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEle.classList.add('hidden');
      matchActive = false;
    } else {
      switchPLayer();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  currentScore = 0;
  score0Ele.textContent = 0;
  score01Ele.textContent = 0;
  currentEle0.textContent = 0;
  currentEle1.textContent = 0;
  matchActive = true;
  score = [0, 0];
  playerEle0.classList.remove('player--winner');
  playerEle1.classList.remove('pla--winner');
  playerEle0.classList.add('active--player');
  playerEle1.classList.remove('active--player');
  console.log(score0Ele.textContent);
});
