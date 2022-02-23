import { combineReducers, createStore } from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";

const reducers = combineReducers({
    categories: categoriesReducer,
});
export type globalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);

//@ts-ignore
window.store = store;