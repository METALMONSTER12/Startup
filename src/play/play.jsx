import React from 'react';
import './play.css';

export function Play() {
  const ROWS = 6;
  const COLUMNS = 7;
  const RED = 'red';
  const YELLOW = 'yellow';
  const EMPTY = null;

  const [board, setBoard] = React.useState(() => 
    Array(ROWS).fill(null).map(() => Array(COLUMNS).fill(EMPTY))
  );
  
  const [currentPlayer, setCurrentPlayer] = React.useState(RED);
  const [winner, setWinner] = React.useState(null);

  const dropPiece = (col) => {
    if (winner) return;

    for(let r = ROWS - 1; r >= 0; r--) { 
      if (board[r][col] === EMPTY) {
        row = r;
        break;
      }
    }
    if (row === undefined) return; // Column full

    const newBoard = board.map(row => row.slice());
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === RED ? YELLOW : RED);
  };

  

}
