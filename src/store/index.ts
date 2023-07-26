import { createStore, compose } from "redux";

import rootReducer from "./rootReducer";

// eslint-disable-next-line
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers());
export default store;
