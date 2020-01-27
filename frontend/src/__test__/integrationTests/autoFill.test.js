import React from "react";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cell } from '../../components/cell'


describe("autoFill tests", () => {

    beforeEach(() => {
    });

    test("default behaviour", async () => {
        const { getByText, getByTestId, debug } = render(
            <Cell row={3} col={4} possibleSolution={"123"} isGiven={false}
                isValid={true} userSolution={""} /> 
        );
        expect(getByTestId("3:4")).toHaveValue('123') 
    })

    test("without possible solutions", async () => {
        const { getByText, getByTestId, debug } = render(
            <Cell row={3} col={4} possibleSolution={"123"} isGiven={false}
                isValid={true} userSolution={""} showPossibleSolutions={false}/> 
        );
        expect(getByTestId("3:4")).toHaveValue('') 
    })

    test("with possible solutions", async () => {
        const { getByText, getByTestId, debug } = render(
            <Cell row={3} col={4} possibleSolution={"123"} isGiven={false}
                isValid={true} userSolution={""} showPossibleSolutions={true}/> 
        );
        expect(getByTestId("3:4")).toHaveValue('123') 
    })

});
