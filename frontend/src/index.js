import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { ContextProvider } from "./Context/UseContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
axios.defaults.baseURL = "http://localhost:5000";
ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
reportWebVitals();
