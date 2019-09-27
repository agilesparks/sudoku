import { isValid } from "./validityChecks";

const sudokuRoot = 2;
const storeSudokuGrid = [];
const notInCell = 0;
const inCell = 1;

for (let row = 0; row < Math.pow(sudokuRoot, 2); row++) {
  storeSudokuGrid[row] = [];
  for (let col = 0; col < Math.pow(sudokuRoot, 2); col++) {
    storeSudokuGrid[row][col] = "1";
  }
}

 const initialState = {
  grid: storeSudokuGrid,
  validity: true
};

export default function rootReducer(state, action) {
  if (typeof state === "undefined") {
    var newState = Object.assign({}, initialState);
    return newState;
  } else {
    switch (action.type) {
      case "ADD_DIGIT_TO_CELL":
        var newState = Object.assign({}, state);
        newState.grid[action.cellRow][action.cellCol] = action.digit;
        return newState;
      case "UPDATE_CELL_DIGIT":
        var newState = Object.assign({}, state);
        newState.grid[action.cellRow][action.cellCol] = action.digit;
        return newState;
      case "CHECK_VALIDITY":
        var newState = Object.assign({}, state);
        newState.validity = isValid(newState.grid);
        return newState;
    }
  }
}
