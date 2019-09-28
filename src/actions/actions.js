export const checkValidity = data => ({
    type: 'CHECK_VALIDITY'
  })

  
export const updateCellDigit = data => ({
  type: 'UPDATE_CELL_DIGIT',
  digit: data.digit,
  cellRow: data.cell.row,
  cellCol: data.cell.col
})

export const setSavedGamesList = data => ({
  type: 'GET_SAVED_GAMES_LIST',
  games: data.games
})

// just a note, here, in the front end, we use the id key of our data object
// in order to identify which we want to Update or delete.
// for our back end, we use the object id assigned by MongoDB to modify
// data base entries

// our first get method that uses our backend api to
// fetch data from our data base
export function getSavedGameListFromAPI(dispatch) {
  fetch('http://localhost:3001/api/getData')
    .then((data) => data.json())
    .then(
      (res) => dispatch(setSavedGamesList({ type: 'GET_SAVED_GAMES_LIST', games: res.data })))
};
  
  