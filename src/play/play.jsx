import React from 'react';
import './play.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [isDraw, setIsDraw] = React.useState(false);  

  const dropPiece = (col) => {
    if (winner) return;

    let row;
    for(let r = ROWS - 1; r >= 0; r--) { 
      if (board[r][col] === EMPTY) {
        row = r;
        break;
      }
    }
    if (row === undefined) return;

    const newBoard = board.map(row => row.slice());
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    checkWinner(row, col, newBoard, currentPlayer);

    if (newBoard.every(row => row.every(cell => cell !== EMPTY))) {
      setIsDraw(true);
    }

    // Switch player
    setCurrentPlayer(currentPlayer === RED ? YELLOW : RED);
  };

  const checkWinner = (row, col, checkBoard, player) => {
    
    
    // Check horizontal
    for (let c = 0; c <= COLUMNS - 4; c++) {
      if (checkBoard[row][c] === player && checkBoard[row][c+1] === player && checkBoard[row][c+2] === player && checkBoard[row][c+3] === player) {
        setWinner(player);
        return;
      }
    }
    // Check vertical
    for (let r = 0; r <= ROWS - 4; r++) {
      if (checkBoard[r][col] === player && checkBoard[r+1][col] === player && checkBoard[r+2][col] === player && checkBoard[r+3][col] === player) {
        setWinner(player);
        return;
      }
    }
    // Check diagonal (/) 
    for (let r = 3; r < ROWS; r++) {
      for (let c = 0; c <= COLUMNS - 4; c++) {
        if (checkBoard[r][c] === player && checkBoard[r-1][c+1] === player && checkBoard[r-2][c+2] === player && checkBoard[r-3][c+3] === player) {
          setWinner(player);
          return;
        }
      }
    }
    // Check diagonal (\)
    for (let r = 0; r <= ROWS - 4; r++) {
      for (let c = 0; c <= COLUMNS - 4; c++) {
        if (checkBoard[r][c] === player && checkBoard[r+1][c+1] === player && checkBoard[r+2][c+2] === player && checkBoard[r+3][c+3] === player) {
          setWinner(player);
          return;
        }
      }
    }
  }


  return ( 
    <main>
      <h2>It is now {currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}'s turn</h2>
      <Modal show={winner || isDraw} onHide={() => {}}>
        <Modal.Body className="bg-primary-subtle text-primary" data-bs-theme="dark" textAlign="center">
          {winner && <h3>{winner.charAt(0).toUpperCase() + winner.slice(1)} Wins!</h3>}
          {isDraw && <h3>It's a draw! Board is full!</h3>}
        </Modal.Body>
        <Modal.Footer className="bg-primary-subtle text-primary" data-bs-theme="dark">
          <Button variant="secondary" onClick={() => {
            setBoard(Array(ROWS).fill(null).map(() => Array(COLUMNS).fill(EMPTY)));
            setCurrentPlayer(RED);
            setWinner(null);
            setIsDraw(false);
          }}>
            Restart Game
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="board">
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell ? cell : ''}`}
              onClick={() => dropPiece(colIndex)}
              style={{backgroundColor: cell === RED ? 'Red' : cell === YELLOW ? 'Yellow' : 'White'}}
            ></div>
          ))
        ))}
      </div>
    </main>
  );

}
