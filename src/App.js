import React, { useState } from 'react'
import './App.css';
import Board from './components/Board';

function getNewBoard() {
  return [
    { value: null }, { value: null }, { value: null },
    { value: null }, { value: null }, { value: null },
    { value: null }, { value: null }, { value: null }
  ];
}


function App() {
  const [board, setBoard] = useState(getNewBoard());
  return (
    <div className="app">
      <Board board={board}></Board>
      <div>
        <button onClick={() => setBoard(getNewBoard())}>Start Over</button>
      </div>
    </div>
  );
}

export default App;
