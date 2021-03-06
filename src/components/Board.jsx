import React, { useState } from "react";
import Square from "./Square";
import { useSelector, useDispatch } from "react-redux";
import populateAction from "../actions/populateAction";
import gameInactiveAction from "../actions/gameInactiveAction";

function squaresMatch(board, i0, i1, i2) {
  return (
    board[i0].value != null &&
    board[i0].value === board[i1].value &&
    board[i0].value === board[i2].value
  );
}

function getGameStatus(board) {
  //left to right
  if (squaresMatch(board, 0, 1, 2)) return board[0].value;
  if (squaresMatch(board, 3, 4, 5)) return board[3].value;
  if (squaresMatch(board, 6, 7, 8)) return board[6].value;

  //top to bottom
  if (squaresMatch(board, 0, 3, 6)) return board[0].value;
  if (squaresMatch(board, 1, 4, 7)) return board[1].value;
  if (squaresMatch(board, 2, 5, 8)) return board[2].value;

  //diagonal
  if (squaresMatch(board, 0, 4, 8)) return board[0].value;
  if (squaresMatch(board, 2, 4, 6)) return board[2].value;

  if (board.every((square) => square.value)) return "DRAW";
  return null;
}

const Board = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state);

  const [placeX, setplaceX] = useState(true);
  const selectSquare = (square) => {
    if (game.gameActive) {
      if (!square.value) {
        dispatch(populateAction(square, placeX ? "X" : "O"));
        setplaceX(!placeX);
      }
      const status = getGameStatus(game.board);
      if (status) {
        if (status === "DRAW") {
          alert(status);
        } else {
          alert(status + " wins");
          dispatch(gameInactiveAction());
        }
      }
    }
  };
  return (
    <div className="board-container">
      <table className="board">
        <tbody>
          <tr>
            {game.board.slice(0, 3).map((s, i) => (
              <td key={"0-" + i}>
                <Square data={s} onClick={selectSquare}></Square>
              </td>
            ))}
          </tr>
          <tr>
            {game.board.slice(3, 6).map((s, i) => (
              <td key={"1-" + i}>
                <Square data={s} onClick={selectSquare}></Square>
              </td>
            ))}
          </tr>
          <tr>
            {game.board.slice(6, 9).map((s, i) => (
              <td key={"2-" + i}>
                <Square data={s} onClick={selectSquare}></Square>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
