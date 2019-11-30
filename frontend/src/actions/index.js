import axios from "axios"

let myURL = ""


if (process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
  myURL = "https://my-sudoku-backend.herokuapp.com"
}
else {
  myURL = "http://localhost:"
  if (process.env.REACT_APP_BACKEND_PORT !== undefined)
    myURL = myURL + process.env.REACT_APP_BACKEND_PORT
  else
    myURL = myURL + "3001"
}


export const resetStore = (root) => ({
  type: "RESET_STORE",
  root: root
});

export const toggleInitial = (row, col) => ({
  type: "TOGGLE_INITIAL",
  cellRow: row,
  cellCol: col
});

export const updateCellSolution = (solution, row, col) => ({
  type: "UPDATE_CELL_SOLUTION",
  solution: solution,
  cellRow: row,
  cellCol: col
});

export const setValidationResult = (isValid, invalidityDetails) => ({
  type: "SET_VALIDATION_RESULT",
  isValid: isValid,
  invalidityDetails: invalidityDetails
});

export const setPossibleSolutions = possibleSolutions => ({
  type: "SET_POSSIBLE_SOLUTIONS",
  possibleSolutions: possibleSolutions
});



export function updateCellSolutionAndValidate(solution,row,col,dispatch) {
  dispatch(updateCellSolution(solution,row,col))
  dispatch(validate())
  dispatch(getPossibleSolutions())
}

export function validate() {
  return (dispatch, getState) => {
    axios
      .post(myURL + "/api/validate", { grid: getState().grid })
      .then(
        res => {
          dispatch(
            setValidationResult(res.data.data.isValid, res.data.data.invalidityDetails)
          )
        },
        error => {
          console.log(error);
        }
      )
      return Promise.resolve()
  }
}

export function getPossibleSolutions() {
  return (dispatch, getState) => {
    axios
      .post(myURL + "/api/possibleSolutions", { grid: getState().grid })
      .then(
        res => {
          dispatch(setPossibleSolutions(res.data.data.possibleSolutions));
        },
        error => {
          console.log(error);
        }
      )
      return Promise.resolve()
  }
}
