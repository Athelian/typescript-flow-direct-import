// @flow

import React from "react";

import Button from "./components/Button";
import logo from "./logo.webp";
import "./App.css";

function App(): React$Element<"div"> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button/>
      </header>
    </div>
  );
}

export default App;
