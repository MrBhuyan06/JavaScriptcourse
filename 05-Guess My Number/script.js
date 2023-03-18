'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number🥳';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // get Data from Input Field

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = '?';
let score = 20;
let currentScore;
let higherscore = 0;

//Function
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

// const setStyle = function (selector, prop, value) {
//   console.log(typeof selector, prop, value);
//   return (document.querySelector(selector + '').style.prop = value);
// };

document.querySelector('.check').addEventListener('click', function () {
  // const guess = Number(document.querySelector('.quess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When No inPut
  if (!guess) {
    displayMessage('No Number');
  }
  // Player WIn
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '';
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    console.log(score);
    // highscore = score;
    if (score > higherscore) {
      higherscore = score;
      document.querySelector('.highscore').textContent = higherscore;
    }
  }
  // Guess is wrong guess different from  secret Number
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High' : '📈 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📈 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' 🤭You Lost The Game';
      displayMessage('🤭You Lost The Game');

      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' 🤭You Lost The Game';

    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
    // // Guess Is too Low
    // else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' 🤭You Lost The Game';

    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

// Implementing Again Button Functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  // document.querySelector('body').style.backgroundColor = '#222';
  setStyle('body', 'backgroundColor', '#333');
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = higherscore;
});

// refactoring the code- Principe of DRY
