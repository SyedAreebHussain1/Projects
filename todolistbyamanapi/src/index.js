import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import './index.css';
axios.defaults.baseURL = "http://localhost:5000/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </BrowserRouter>
);
reportWebVitals();
