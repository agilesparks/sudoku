import {
    resetStore, toggleInitial,validateAndGetPossibleSolutions,
    updateCellSolution, setValidationResult, setPossibleSolutions,
    validate, getPossibleSolutions
} from "../../actions";
import { getSolutionFromGrid, isGiven } from "../../utils/gridUtils"

import axiosMock from 'axios'
import thunk from 'redux-thunk';
import { createStore , applyMiddleware} from 'redux'
import rootReducer from "../../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));


describe("my tests", () => {

    beforeEach(() => {
        store.dispatch (resetStore(2))
    }); 

    test("udpate solution", async () => {
        store.dispatch(updateCellSolution(['1', '2'], 2, 3))
        expect(getSolutionFromGrid(store.getState().grid, 2, 3)).toStrictEqual(["1", "2"]);
    });

    test("toggle initial", async () => {
        expect(isGiven(store.getState().grid, 2, 3)).toBeFalsy();
        store.dispatch(toggleInitial(2, 3))
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

    test("validate with async network call", async () => {

        let validationResult = [{ col: 3, row: 3, solution: "1" },
        {
            col: 4, row: 3, solution: "1"
        }, {
            col: 3, row: 3, solution: "1"
        }, {
            col: 4, row: 3, solution: "1"
        }]
        //first call
        axiosMock.post.mockImplementationOnce(() =>
            Promise.resolve({
                data: { data: { isValid: false, invalidityDetails: validationResult } }
            }))
      
        store.dispatch(validate()).then(()=>{
        expect(store.getState().isValid).toBeFalsy();
        expect(store.getState().invalidityDetails).toStrictEqual(validationResult);
         })
    })

    test("get solution with async network call", async () => {

        let newPossibleSolutions = [
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "1234" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }],
            [{ given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }, { given: false, solution: "" }]]
       
        axiosMock.post.mockImplementationOnce(() =>
            Promise.resolve({
                data: { data: { possibleSolutions: newPossibleSolutions } }
            }))
        store.dispatch(getPossibleSolutions()).then(()=>{
         expect(store.getState().possibleSolutions).toStrictEqual(newPossibleSolutions);
        })
    })




});
