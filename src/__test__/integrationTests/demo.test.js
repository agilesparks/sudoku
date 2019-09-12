// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

// the axios mock is in __mocks__/
// see https://jestjs.io/docs/en/manual-mocks
//import axiosMock from 'axios'

// the component to test


import { createStore } from 'redux'
import { Provider } from 'react-redux'

//import { initialState, reducer } from '../reducers'

import rootReducer from "../../reducers";

const store = createStore(rootReducer);

import App from '../../components/App'

test('can render with redux with defaults', () => {
    const { getByText, getByTestId, container, asFragment } = render(
        <Provider store={store}>{<App />}</Provider>
    )
  
    //expect(getByText('ClickMe!')).toBeInTheDocument()
    fireEvent.click(getByText('Valid'))
    expect(getByText('Not Valid')).toBeInTheDocument()
})