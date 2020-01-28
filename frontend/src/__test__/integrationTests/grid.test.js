import React from "react";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Grid } from '../../components/grid'
import { getInitialState } from '../../reducers/index'


describe("cell tests", () => {

    beforeEach(() => {
    });

    test("grid functioning", async () => {
        let myStore = getInitialState(3) 

        let myDispatch = function () { }
    
        const { getByText, getByTestId, debug } = render(
            <Grid myStore={myStore} dispatch={myDispatch}></Grid>);
        expect(getByTestId("1:1")).toHaveValue('')
    })

});
