import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
axios.defaults.baseURL = "https://64a1de510079ce56e2db730e.mockapi.io/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
);
reportWebVitals();
