export function getCellRow(root, subgridNumber, cellNumber) {
    return Math.floor(subgridNumber / root) * root + Math.floor(cellNumber / root);
}
  
export function getCellCol(root, subgridNumber, cellNumber) {
    return (subgridNumber % root) * root + (cellNumber % root);
};
  
export function getSolutionFromGrid(grid, row, col) {
    return grid[row][col].solution
}

export function isGiven(grid, row, col) {
    return grid[row][col].given
}

export function getCleanGrid(root) {
    let grid = [];
  
    for (let row = 0; row < Math.pow(root, 2); row++) {
      grid[row] = [];
      for (let col = 0; col < Math.pow(root, 2); col++) {
          grid[row][col] = { given: false, solution: "" };
      }
    }
    return grid;
}

function getGridCopy(grid) {
    return grid.map(function(row) {
        return row.slice();
    })
}
  
export function getGridWithUpdatedSolution(grid, row, col, solution) {
    let newGrid = getGridCopy(grid)
    newGrid[row][col].solution = solution
    return newGrid
}

export function getGridWithToggledGiven(grid, row, col) {
    let newGrid = getGridCopy(grid)
    newGrid[row][col].given= !newGrid[row][col].given
    return newGrid
}