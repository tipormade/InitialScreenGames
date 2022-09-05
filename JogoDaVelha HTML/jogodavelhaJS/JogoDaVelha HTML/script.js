var buttons = document.querySelectorAll('.game button');
let player = 'X';
let turn = true;
let xSteps = [];
let oSteps = [];

buttons.forEach(item => {
  item.innerHTML = '';
  item.addEventListener('click', newMove);
});

function newMove(e) {
  const index = e.target.getAttribute('data-i');
  turn = !turn;

  if (e.target.innerHTML == '') {
    if (turn == false) {
      player = 'X';
      xSteps.push(index);
    } else {
      player = 'O';
      oSteps.push(index);
    }

    e.target.innerHTML = player;
  }

  console.log('x' + xSteps);
  console.log('o' + oSteps);
}

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
