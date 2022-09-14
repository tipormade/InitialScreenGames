var buttons = document.querySelectorAll('.game button');
var winLine = document.querySelector('#winLine');
var xScoreText = document.querySelector('#xScore');
var oScoreText = document.querySelector('#oScore');
var playButton = document.querySelector('#play');
var xScore = 0;
var oScore = 0;
var winner = false;

buttons.forEach(item => {
  item.innerHTML = '';
  item.addEventListener('click', newMove);
});

function newMove(e) {
  if (currentPlayer != human || winner) return;
  const index = e.target.getAttribute('data-i');
  [x, y] = index.split(',');
  if (board[x][y] != '') return;
  board[x][y] = human;
  currentPlayer = ai;

  displayMove();
  checkWinnerFinal();
}

function checkWinnerFinal() {
  winner = checkWinner();
  if (!winner && currentPlayer == ai) {
    bestMove();
    checkWinnerFinal();
  } else if (winner == human) {
    xScore++;
    xScoreText.innerHTML = xScore;
    if (xScore >= 2) {
      Swal.fire({
        title: 'Parabéns!',
        text: 'Você ganhou!', 
        icon: 'success',
        confirmButtonColor: '#509d45',
        confirmButtonText: 'Ok',
      }).then((result) => {
        window.location.replace('../InitialScreenBubbles.html');
      });
    }
  } else if (winner == ai) {
    oScore++;
    oScoreText.innerHTML = oScore;
    if (oScore >= 3) {
      Swal.fire({
        title: 'Você perdeu',
        text: 'Deseja Jogar novamente?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#509d45',
        cancelButtonColor: '#024053',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace('index.html');
        } else {
          window.location.replace('../');
        }
      });
    }
  } else if (winner == 'tie') {
  }

  if (winner) {
    showResult();
    clearGrid();
  }
}

function clearGrid() {
  setTimeout(playGame, 1000);
}

function showResult() {
  if (winner != 'tie') showLine();
}

function showLine() {
  winLine.classList.remove('hidden');
  winnerLine = checkLine();
  winLine.classList.add(`condition${winnerLine.position}`);
}

function playGame() {
  winLine.removeAttribute('class');
  winLine.setAttribute('class', 'hidden');
  currentPlayer = human;
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  displayMove();
  winner = false;

  if (oScore >= 3 || xScore >= 3) {
    oScore = 0;
    xScore = 0;

    oScoreText.innerHTML = oScore;
    xScoreText.innerHTML = xScore;
  }
}

function displayMove() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById(`button${i}${j}`).innerHTML = board[i][j];
    }
  }
}

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let w;
let h;

let ai = 'O';
let human = 'X';
let currentPlayer = human;

function equals3(a, b, c) {
  return a == b && b == c && a != '';
}

function checkWinner() {
  [winner, position] = checkLine();

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

function checkLine() {
  let winnerWithLine = { winner: null, position: null };
  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winnerWithLine.winner = board[i][0];
      winnerWithLine.position = i;
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winnerWithLine.winner = board[0][i];
      winnerWithLine.position = 3 + i;
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winnerWithLine.winner = board[0][0];
    winnerWithLine.position = 6;
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winnerWithLine.winner = board[2][0];
    winnerWithLine.position = 7;
  }

  return winnerWithLine;
}

function mousePressed() {
  if (currentPlayer == human) {
    // Human make turn
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    // If valid turn
    if (board[i][j] == '') {
      board[i][j] = human;
      currentPlayer = ai;
      setTimeout(bestMove, Math.ceil(Math.random() * 400) + 200);
    }
  }
}