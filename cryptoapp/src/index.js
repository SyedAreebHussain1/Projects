
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App"
import store from "./app/store";
// import './App.css'
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>)




// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import App from "./App"
// import store from "./app/store";
// // import './App.css'
// import 'antd/dist/antd.css'
// ReactDOM.render(<Router>
//     <Provider store={store}>
//         <App />
//     </Provider>
// </Router>, document.getElementById("root"))