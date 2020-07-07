function populateAction(square, newValue) {
    return {
        type: 'POPULATE_SQUARE',
        payload: {
            square,
            newValue
        }
    }
}

export default populateAction;
