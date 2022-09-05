import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(API.middleware),
  })

export const store = setupStore()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
