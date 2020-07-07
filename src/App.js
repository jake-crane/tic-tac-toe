import React, { useState } from 'react'
import './App.css';
import Board from './components/Board';
import { useDispatch } from 'react-redux';
import startOverAction from './actions/startOverAction';

function App() {
  const dispatch = useDispatch();
  const [gameActive, setGameActive] = useState(true);
  return (
    <div className="app">
      <Board gameActive={gameActive} />
      <div>
        <button onClick={() => {
          setGameActive(true);
          dispatch(startOverAction());
        }}>Start Over</button>
      </div>
    </div>
  );
}

export default App;
