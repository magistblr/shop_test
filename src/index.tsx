import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './main/app/App';
import { persistor, store } from 'store/store';

import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
