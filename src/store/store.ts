import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { API } from '../services/apiService'

import appReducer from './reducers/AppSlice'
import categoryReducer from './reducers/CategorySlice'
import productReducer from './reducers/ProductSlice'
import cartReducer from './reducers/CartSlice'

export const rootReducer = combineReducers({
  categoryReducer,
  productReducer,
  appReducer,
  cartReducer,
  [API.reducerPath]: API.reducer,
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(API.middleware),
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
