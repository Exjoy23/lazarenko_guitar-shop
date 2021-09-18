import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import dataSlice from './store/slices/data-slice';
import uiSlice from './store/slices/ui-slice';
import App from './components/app/app';

const store = configureStore({
  reducer: { dataSlice, uiSlice },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
