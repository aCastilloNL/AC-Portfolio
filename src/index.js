import React from "react";
import {SoundProvider} from "./context/SoundContext";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <SoundProvider>
  <Router>
    <App />
  </Router>
  </SoundProvider>,
  document.getElementById('root')
);