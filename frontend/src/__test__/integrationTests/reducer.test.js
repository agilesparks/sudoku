import {
    resetStore, toggleInitial,
    updateCellSolution, setValidationResult, setPossibleSolutions
} from "../../actions";
import { getSolutionFromGrid, isGiven } from "../../utils/gridUtils"

import axiosMock from 'axios'

import { createStore } from "redux";

import rootReducer from "../../reducers";


const store = createStore(rootReducer);


describe("my tests", () => {

    beforeEach(() => {
        store.dispatch(resetStore(2))
        axiosMock.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: { data: [{ id: 0, name: 'yaki' }, { id: 1, name: "tamar" }] }
            })
        );
    });

    test("udpate solution", async () => {
        store.dispatch(updateCellSolution(['1', '2'], 2, 3))
        expect(getSolutionFromGrid(store.getState().grid, 2, 3)).toStrictEqual(["1", "2"]);
    });

    test("toggle initial", async () => {
        expect(isGiven(store.getState().grid, 2, 3)).toBeFalsy();
        store.dispatch(toggleInitial(2, 3 ))
        expect(isGiven(store.getState().grid, 2, 3)).toBeTruthy();
    });

    test("set validation result", async () => {

        let validationResult = [{
            col: 3,
            row: 3,
            solution: "1"
        },
        {
            col: 4,
            row: 3,
            solution: "1"
        }, {
            col: 3,
            row: 3,
            solution: "1"
        }, {
            col: 4,
            row: 3,
            solution: "1"
        }]

        expect(store.getState().isValid).toBeTruthy();
        expect(store.getState().invalidityDetails).toStrictEqual([]);

        store.dispatch(setValidationResult(false, validationResult))
        expect(store.getState().isValid).toBeFalsy();
        expect(store.getState().invalidityDetails).toStrictEqual(validationResult);
    });

    test("set possible solutions", async () => {

        let initialPossibleSolutions = [
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }]]

        let newPossibleSolutions = [
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "1234" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }]]


        expect(store.getState().possibleSolutions).toStrictEqual(initialPossibleSolutions);
        store.dispatch(setPossibleSolutions(newPossibleSolutions))
        expect(store.getState().possibleSolutions).toStrictEqual(newPossibleSolutions);


    })




});
