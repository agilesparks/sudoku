import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { createStore } from "redux";
import { Provider } from "react-redux";

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
