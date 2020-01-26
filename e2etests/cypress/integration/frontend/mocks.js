export function getPossibleSolutionsBaseMock() {
    let possibleSolutions = []
    for (let row = 0; row < 9; row++) {
        possibleSolutions[row] = []
        for (let col = 0; col < 9; col++) {
            possibleSolutions[row][col] = { given: false, solution: "" }
        }
    }
    return possibleSolutions
}