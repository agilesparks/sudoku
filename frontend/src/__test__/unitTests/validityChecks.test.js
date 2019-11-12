import {getCellRow, getCellCol, getSolutionFromGrid, getCleanGrid, getGridWithUpdatedSolution} from "../../utils/gridUtils"

describe('validityChecks', () => {
    const root = 2
    let grid = getCleanGrid(root)
    
    beforeEach(() => {
      grid = getCleanGrid(root)
    })
  
  test('get row, get col by grid, cell', () => {
    grid = getGridWithUpdatedSolution(grid, 1, 2, "5")
    expect(getCellRow(2, 1, 2)).toBe(1)
    expect(getCellCol(2, 1,2)).toBe(2)
    expect(getSolutionFromGrid(grid,getCellRow(2,1,2), getCellCol(2,1,2))).toBe("5")
  })

  })