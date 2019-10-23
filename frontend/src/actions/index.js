import axios from "axios"

const myURL = process.env.REACT_APP_ENVIRONMENT === "PRODUCTION" ? 
"https://my-sudoku-backend.herokuapp.com":"http://localhost:3001"

export const toggleInitial = data => ({
  type: "TOGGLE_INITIAL",
  cellRow: data.cell.row,
  cellCol: data.cell.col
});

export const updateCellSolution = data => ({
  type: "UPDATE_CELL_SOLUTION",
  solution: data.solution,
  cellRow: data.cell.row,
  cellCol: data.cell.col
});

export const setSavedGamesList = data => ({
  type: "GET_SAVED_GAMES_LIST",
  games: data.games
});

export const setValidationResult = data => ({
  type: "SET_VALIDATION_RESULT",
  isValid: data.isValid,
  invalidityDetails: data.invalidityDetails
});

export const setPossibleSolutions = data => ({
  type: "SET_POSSIBLE_SOLUTIONS",
  possibleSolutions: data.possibleSolutions
});

// just a note, here, in the front end, we use the id key of our data object
// in order to identify which we want to Update or delete.
// for our back end, we use the object id assigned by MongoDB to modify
// data base entries

// our first get method that uses our backend api to
// fetch data from our data base
export function getSavedGameListFromAPI(dispatch) {
  axios
    .get(myURL+"/api/getData")
    .then(
      res => {
        dispatch(
          setSavedGamesList({
            type: "GET_SAVED_GAMES_LIST",
            games: res.data.data
          })
        );
      },
      error => {
        console.log(error);
      }
    );
}

  export function validate(dispatch,grid) {
    axios
      .post(myURL+"/api/validate", { grid: grid })
      .then(
        res => {
          dispatch(
            setValidationResult({
              type: "SET_VALIDATION_RESULT",
              isValid: res.data.data.isValid,
              invalidityDetails: res.data.data.invalidityDetails
            })
          );
        },
        error => {
          console.log(error);
        }
      );
}
  
export function getPossibleSolutions(dispatch,grid) {
  axios
    .post(myURL+"/api/possibleSolutions", { grid: grid })
    .then(
      res => {
        dispatch(
          setPossibleSolutions({
            type: "SET_POSSIBLE_SOLUTIONS",
            possibleSolutions: res.data.data.possibleSolutions
          })
        );
      },
      error => {
        console.log(error);
      }
    );
}
