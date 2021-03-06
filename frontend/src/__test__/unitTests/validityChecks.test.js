import { isValid, getCellRow, getCellCol, getSolutionFromGrid, getCleanGrid, getGridWithUpdatedSolution } from "../../utils/gridUtils"

describe('validityChecks', () => {
  const root = 2
  let grid = getCleanGrid(root)

  beforeEach(() => {
    grid = getCleanGrid(root)
  })

  test('get row, get col by grid, cell', () => {
    grid = getGridWithUpdatedSolution(grid, 1, 2, "5")
    expect(getCellRow(2, 1, 2)).toBe(1)
    expect(getCellCol(2, 1, 2)).toBe(2)
    expect(getSolutionFromGrid(grid, getCellRow(2, 1, 2), getCellCol(2, 1, 2))).toBe("5")
  })

  test('is valid', () => {
    let validationResult = [{ col: 3, row: 3, solution: "1" },
        {
            col: 4, row: 3, solution: "1"
        }, {
            col: 3, row: 3, solution: "1"
        }, {
            col: 4, row: 3, solution: "1"
        }]

        expect(isValid(validationResult,3,1)).toBeTruthy()
        expect(isValid(validationResult,3,3)).toBeFalsy() 

  })

})