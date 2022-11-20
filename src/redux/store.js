import { legacy_createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store = legacy_createStore(
  reducers,
  composeEnhances(applyMiddleware(thunk)),
);

export default store;
