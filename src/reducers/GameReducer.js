function getNewBoard() {
  return [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ];
}

const GameReducer = (
  state = { gameActive: true, board: getNewBoard() },
  action
) => {
  switch (action.type) {
    case "POPULATE_SQUARE":
      const newState = { ...state, board: [...state.board] };
      const selectedSquareIndex = newState.board.findIndex(
        (s) => s === action.payload.square
      );
      newState.board[selectedSquareIndex] = {
        ...action.payload.square,
        value: action.payload.newValue,
      };
      return newState;
    case "START_OVER":
      return { gameActive: true, board: getNewBoard() };
    case "GAME_INACTIVE":
      return { ...state, gameActive: false };
    default:
      return state;
  }
};

export default GameReducer;
