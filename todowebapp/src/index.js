import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
axios.defaults.baseURL = "https://64a1de510079ce56e2db730e.mockapi.io/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
