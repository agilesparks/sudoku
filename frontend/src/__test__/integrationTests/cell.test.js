import React from "react";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cell } from '../../components/cell'


describe("cell tests", () => {

  beforeEach(() => { 


   });

  test("normal cell is enalbed", async () => {
    const { getByText, getByTestId, debug } = render(
      <Cell row={3} col={4} possibleSolution={[]} isGiven={false} 
      isValid= {true} userSolution={[]}/>
    );
    expect(getByTestId("3:4")).not.toHaveAttribute('readonly')
  })

  test("start of puzzle (double clicked) cell is disalbed", async () => {
    const { getByText, getByTestId, debug } = render(
      <Cell row={3} col={4} possibleSolution={[]} isGiven={true} 
      isValid= {true} userSolution={[]}/>
    );

    expect(getByTestId("3:4")).toHaveAttribute('readonly')
  })




 
    
    
});
