import React from "react";
import "./App.css";
import Board from "./components/Board";
import { useDispatch } from "react-redux";
import startOverAction from "./actions/startOverAction";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Board />
      <div>
        <button
          onClick={() => {
            dispatch(startOverAction());
          }}
        >
          Start Over
        </button>
      </div>
    </div>
  );
}

export default App;
