import { isValid } from "../../reducers/validityChecks";

describe('validityChecks', () => {
    const sudokuRoot = 2
    const grid = []
    
    beforeAll(() => {
      /* Runs before all tests */
    })
    
    afterAll(() => {
      /* Runs after all tests */
    })
   
    beforeEach(() => {
        for (let row = 0; row < Math.pow(sudokuRoot, 2); row++) {
            grid[row] = [];
          for (let col = 0; col < Math.pow(sudokuRoot, 2); col++) {
            grid[row][col] = "";
          }
        }
    })
    afterEach(() => {
      /* Runs after each test */
    })
  
    test('different values on 0,0 and 0,1', () => {
      grid[0][0]= "1"
      expect(isValid(grid)).toBeTruthy()
    })

    test('same values on 0,0 and 0,1', () => {
        expect(isValid(grid)).toBeFalsy()
      })
  })