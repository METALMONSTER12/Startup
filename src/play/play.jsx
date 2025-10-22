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

  
}
