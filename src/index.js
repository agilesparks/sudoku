import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore , applyMiddleware} from 'redux'
import rootReducer from "./reducers/reducers";
import { getSavedGameListFromAPI } from './actions/actions'

const store = createStore(rootReducer, applyMiddleware(thunk));
getSavedGameListFromAPI(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();
