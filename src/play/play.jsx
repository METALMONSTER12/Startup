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

  return ( 
    <main>
      <h2>It is now {currentPlayer}'s turn</h2>
      {winner && <h3>{winner} wins!</h3>}

      <div className="board">
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell ? cell : ''}`}
              onClick={() => dropPiece(colIndex)}
              style={{backgroundColor: cell === RED ? 'red' : cell === YELLOW ? 'yellow' : 'white'}}
            ></div>
          ))
        ))}
      </div>
         <button onClick={() => {
          setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(EMPTY)));
          setCurrentPlayer(RED);
          setWinner(null);
        }}>Restart Game</button>

    </main>
  );

}
