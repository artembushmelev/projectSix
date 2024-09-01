import { combineReducers, legacy_createStore } from "redux";
import { countReducer } from "./countReducerRedux";

const rootReducer = combineReducers({
  count: countReducer,
});

export const store = legacy_createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;
