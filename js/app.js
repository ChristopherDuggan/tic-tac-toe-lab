let board;
let turn;
let winner; 
let tie;

const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.querySelector('#message');

function render() {
  updateMessage()
  updateBoard()
}

const updateBoard = function() {
  board.forEach((square, squareIndex) => {
    squareEls[squareIndex].textContent = square;
  });
}

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.innerText = turn;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie!"
  } else {
    messageEl.textContent = `${turn} is the winner!`
  }
}

const init = () => {
  board = ['a', 'b', 'c', 'd', '', '', '', 'p', 'q'];
  turn = 'x';
  winner = false;
  tie = false;

  render()
}

window.onload = () => {
  init();
}
