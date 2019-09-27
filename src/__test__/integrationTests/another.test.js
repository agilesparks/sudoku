// import dependencies
import React from "react";

// import react-testing methods
import { render, fireEvent, waitForElement } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

// the axios mock is in __mocks__/
// see https://jestjs.io/docs/en/manual-mocks
//import axiosMock from 'axios'

// the component to test

import { createStore } from "redux";
import { Provider } from "react-redux";

//import { initialState, reducer } from '../reducers'
import rootReducer from "../../reducers";

import App from "../../components/App";

describe("my tests", () => {
  test("can render with redux with defaults", async () => {
    const store = createStore(rootReducer);

    const { getByText, getByTestId } = render(
      <Provider store={store}>{<App />}</Provider>
    );

    fireEvent.click(getByText("Valid"));
    expect(getByText("Not Valid")).toBeInTheDocument();

    const input = getByTestId("0:0");
    fireEvent.change(input, { target: { value: "99" } });

    const input2 = getByTestId("0:1");
    fireEvent.change(input2, { target: { value: "88" } });

    fireEvent.click(getByText("Not Valid"));
    expect(getByText("Valid")).toBeTruthy();
  });
});