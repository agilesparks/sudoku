# Unit Tests and Integration Tests, React
The purpose of this repository is to allow easy practicing in unit tests and integrations tests.
The repository was initially created with create-react-app (https://github.com/facebook/create-react-app).
Jest and Testing Library (https://testing-library.com/) are used for the testing.
After downloading the repository (assuming you have node.js installed) please use either npm or yarn install to get all the packages.
To run the application please run npm/yarn start.
To run the tests (it keeps polloing) run npm/yarn test.

The tests are located in src/\__test\__.

# The exercise
This is a very simple sudoku board. pressing the button checks the validity.
The only check now is whether the two left most cells on the top row are the same or not.

Your task, should you choose to a accept it, is to add more validity checks, e.g. that the contents of rows, columns and subgrids are unique (through reducers).
Try TDD-ing - add unit tests for more cases, in small steps.
TDD with the integrationt tests as well.
Good luck.

