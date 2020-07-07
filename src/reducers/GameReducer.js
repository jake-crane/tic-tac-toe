function getNewBoard() {
    return [
        { value: null }, { value: null }, { value: null },
        { value: null }, { value: null }, { value: null },
        { value: null }, { value: null }, { value: null }
    ];
}


const GameReducer = (state = getNewBoard(), action) => {
    switch (action.type) {
        case 'POPULATE_SQUARE':
            const newBoard = [...state];
            const selectedSquareIndex = newBoard.findIndex(s => s === action.payload.square);
            newBoard[selectedSquareIndex] = { ...action.payload.square, value: action.payload.newValue }
            return newBoard;
        case 'START_OVER':
            return getNewBoard();
        default:
            return state;
    }
};

export default GameReducer;