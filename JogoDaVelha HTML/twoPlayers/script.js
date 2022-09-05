var buttons = document.querySelectorAll('.game button');
var winnerPlayer = document.querySelector('#winnerPlayer');
var winner = document.querySelector('#winner');
var winnerText = document.querySelector('#winnerText');
var winnerTitle = document.querySelector('#winnerTitle');
var xScoreText = document.querySelector('#xScore');
var oScoreText = document.querySelector('#oScore');
var playButton = document.querySelector('#play');
var winLine = document.querySelector('#winLine');
var turnX = document.querySelector('#turnX');
var turnO = document.querySelector('#turnO');
var xScore = 0;
var oScore = 0;
let turnCount = 0;
let turn = true;
let winnerCheck = false;
let player = 'X';
let xSteps = [];
let oSteps = [];

const conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach(item => {
  item.innerHTML = '';
  item.addEventListener('click', newMove);
});

function newMove(e) {
  const index = e.target.getAttribute('data-i');

  if (e.target.innerHTML == '') {
    turn = !turn;
    turnCount++;
    if (turn == false) {
      player = 'X';
      turnX.classList.add('hidden');
      turnO.classList.remove('hidden');
      xSteps.push(Number(index));
    } else {
      player = 'O';
      turnO.classList.add('hidden');
      turnX.classList.remove('hidden');
      oSteps.push(Number(index));
    }

    e.target.innerHTML = player;

    checkWinner();
  }
}

function checkWinner() {
  for (i = 0; i < 8; i++) {
    if (
      oSteps.includes(conditions[i][0]) &&
      oSteps.includes(conditions[i][1]) &&
      oSteps.includes(conditions[i][2])
    ) {
      oScore++;
      turn = !turn;
      oScoreText.innerHTML = oScore;
      winLine.classList.add('condition' + i);
      winLine.classList.remove('hidden');

      buttons.forEach(item => {
        item.removeEventListener('click', newMove);
        winnerCheck = true;
      });

      playButton.classList.toggle('invisible');

      if (oScore >= 3) {
        turn = true;

        winner.classList.remove('hidden');
        winnerText.innerHTML = 'O';

        playButton.classList.remove('invisible');
        turnX.classList.add('hidden');
        turnO.classList.remove('hidden');
      }
    }

    if (
      xSteps.includes(conditions[i][0]) &&
      xSteps.includes(conditions[i][1]) &&
      xSteps.includes(conditions[i][2])
    ) {
      xScore++;
      turn = !turn;
      xScoreText.innerHTML = xScore;
      winLine.classList.add('condition' + i);
      winLine.classList.remove('hidden');

      buttons.forEach(item => {
        item.removeEventListener('click', newMove);
        winnerCheck = true;
      });

      playButton.classList.remove('invisible');

      if (xScore >= 3) {
        turn = true;

        winner.classList.remove('hidden');
        winnerText.innerHTML = 'X';

        playButton.classList.remove('invisible');
        turnX.classList.remove('hidden');
        turnO.classList.add('hidden');
      }
    }

    if (winnerCheck == false && turnCount >= 9) {
      playButton.classList.remove('invisible');
      winner.classList.remove('hidden');
      winnerText.innerHTML = 'Empate';
    }
  }
}

function playGame() {
  playButton.classList.toggle('invisible');
  winLine.removeAttribute('class');
  winLine.setAttribute('class', 'hidden');
  winner.classList.add('hidden');

  turnCount = 0;
  xSteps = [];
  oSteps = [];

  buttons.forEach(item => {
    item.innerHTML = '';
    winnerCheck = false;
    item.addEventListener('click', newMove);
  });

  if (oScore >= 3 || xScore >= 3) {
    oScore = 0;
    xScore = 0;

    oScoreText.innerHTML = oScore;
    xScoreText.innerHTML = xScore;
  }

  if (turn == false) {
    player = 'X';
    turnX.classList.add('hidden');
    turnO.classList.remove('hidden');
  } else {
    player = 'O';
    turnO.classList.add('hidden');
    turnX.classList.remove('hidden');
  }
}
