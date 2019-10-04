import axios from "axios"

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
  invalidityReason: data.invalidaityReason
});

// just a note, here, in the front end, we use the id key of our data object
// in order to identify which we want to Update or delete.
// for our back end, we use the object id assigned by MongoDB to modify
// data base entries

// our first get method that uses our backend api to
// fetch data from our data base
export function getSavedGameListFromAPI(dispatch) {
  axios
    .get("http://localhost:3001/api/getData")
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


export function validate(dispatch) {
  axios
    .post("http://localhost:3001/api/validate")
    .then(
      res => {
        dispatch(
          setValidationResult({
            type: "SET_VALIDATION_RESULT",
            isValid: res.data.data.isValid,
            invalidityReason: res.data.data.inValidaityReason
          })
        );
      },
      error => {
        console.log(error);
      }
    );
}
