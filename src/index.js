import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import createHistory from "history/createBrowserHistory";
import configureStore from "./stores";
import App from "./containers/App/App";
import "./index.css";

export const { persistor, store } = configureStore();
export const history = createHistory();

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
