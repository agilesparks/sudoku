export const checkValidity = data => ({
    type: 'CHECK_VALIDITY'
  })

  
export const updateCellDigit = data => ({
  type: 'UPDATE_CELL_DIGIT',
  digit: data.digit,
  cellRow: data.cell.row,
  cellCol: data.cell.col
})
  
  