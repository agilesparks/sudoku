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

  xtest("can render with redux with defaults", async () => {
   
    const { getByText, getByTestId, debug } = render(
      <Provider store={store}>{<App />}</Provider>
    );

    axiosMock.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: { data: { isValid: true, invalidityDetails: [] } }
    })
  );
   let input = getByTestId("0:0");
    fireEvent.change(input, { target: { value: "99" } });
    axiosMock.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: { data: { isValid: false, invalidityDetails: [{row: 0,col: 1}] } }
    })
  );

   const input2 = getByTestId("0:1");
   fireEvent.change(input2, { target: { value: "99" } });
    await wait(() => getByText("Not Valid"))
    expect(getByText("Not Valid")).toBeInTheDocument();
    expect(getByTestId("0:1")).toHaveAttribute('style',"color: rgb(40, 44, 52); background-color: rgb(233, 87, 63);")
    
    axiosMock.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: { data: { isValid: true, invalidityDetails: [] } }
    })
  );
    input = getByTestId("0:1");
    fireEvent.change(input, { target: { value: "88" } });


   // fireEvent.click(getByText("Not Valid"));
    await wait(() => getByText("Valid"))
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
