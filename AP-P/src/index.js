import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import App from './App';
import './index.css';
import './App.css';


axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.baseURL = "https://developmentbackend.propertywallet.pk/V1/"
axios.defaults.baseURL = "https://stagingbackend.propertywallet.pk/V1/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
reportWebVitals();
