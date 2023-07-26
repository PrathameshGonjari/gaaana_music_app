import { combineReducers } from "redux";
import musicappreducer from "./musicappreducer";
import userappreducer from "./userappreducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  musicappreducer,
  userappreducer,
});

const rootReducer = persistReducer(persistConfig, reducer);

export default rootReducer;
