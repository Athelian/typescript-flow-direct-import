// @flow

import React from "react";

import ButtonTS from "@app/typescript/src/components/Button";
import ButtonJS from "./components/Button";
import logo from "./logo.webp";
import "./App.css";

function App(): React$Element<"div"> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ButtonJS />
          <ButtonTS />
        </div>
      </header>
    </div>
  );
}

export default App;
