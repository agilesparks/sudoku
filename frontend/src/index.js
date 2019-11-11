import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore , applyMiddleware} from 'redux'
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();