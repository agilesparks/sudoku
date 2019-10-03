import {getSolutionFromGrid} from "../utils/gridUtils"

export function isValid(grid) {
    return getSolutionFromGrid(grid, 0,0) !== getSolutionFromGrid(grid, 0,1)
}
