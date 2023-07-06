import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

axios.defaults.baseURL = "https://64a1de510079ce56e2db730e.mockapi.io/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
);
reportWebVitals();
