'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct num !!🤣😂';

// console.log(document.querySelector('.message').textContent);
let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const diplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  // no input then
  if (!guess) {
    diplayMessage('no number');
  }
  // guess the corret input
  else if (guess === sNumber) {
    document.querySelector('.number').textContent = sNumber;
    // document.querySelector('.message').textContent = 'the number is correct 😎';
    diplayMessage('the number is correct 😎');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    score;
    //high score text
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // the diff number
  else if (guess !== sNumber) {
    if (score > 1) {
      diplayMessage(guess < sNumber ? 'too low 👀' : 'too high 👀');
      //   document.querySelector('.message').textContent =
      //     guess < sNumber ? 'too low 👀' : 'too high 👀';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displaymessage('you lose😒');
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displaymessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
