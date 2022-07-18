import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { categoryAPI } from '../services/CategoryService';

import categoryReducer from './reducers/CategorySlice';

export const rootReducer = combineReducers({
  categoryReducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(categoryAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
