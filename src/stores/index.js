import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import recipes from "../reducers";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState => {
  const store = createStore(
    persistReducer(
      {
        key: "pomodoro",
        keyPrefix: "",
        storage: localStorage
      },
      recipes
    ),
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...[
          thunk,
          sagaMiddleware,
          createLogger({
            collapsed: true,
            duration: true
          })
        ]
      )
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(sagas);
  return { persistor, store };
};
