export function getCellRow(root, subgridNumber, cellNumber) {
    return Math.floor(subgridNumber / root) * root + Math.floor(cellNumber / root);
}
  
export function getCellCol(root, subgridNumber, cellNumber) {
    return (subgridNumber % root) * root + (cellNumber % root);
};
  
export function getDigitFromGrid(grid, row, col) {
    return grid[row][col]
}