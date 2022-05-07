import { combineReducers, configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/CategorySlice';

export const rootReducer = combineReducers({
  categoryReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
