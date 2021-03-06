import React from 'react';

import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './main/app/App';

import { setupStore } from 'store/store';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
