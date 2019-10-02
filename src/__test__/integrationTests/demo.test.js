import React from "react";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import axiosMock from 'axios'

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "../../reducers";

import App from "../../components/app";
import BoardsManager from "../../components/boardsManager";

const store = createStore(rootReducer);


describe("my tests", () => {

  beforeEach(() => {
    store.dispatch({ type: 'RESET_STORE' })
    axiosMock.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { data: [{ id: 0, name: 'yaki' }, { id: 1, name: "tamar" }] }
    })
  );
  });

  test("can render with redux with defaults", async () => {
   
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

  test("can render with redux with defaults (2)", async () => {

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

  xtest("get list of games", async () => {

    

    const { getByText, getByTestId , debug} = render(
      <Provider store={store}>{<BoardsManager />}</Provider>
    );

    await wait(() => getByText('yaki'))
    expect(getByText("yaki")).toBeTruthy();
  });
    
    
});
