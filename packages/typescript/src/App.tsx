import logo from "./logo.svg";
import "./App.css";
import ButtonTS from "./components/Button";
import ButtonJS from "@app/flow/src/components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonTS/>
        <ButtonJS/>
      </header>
    </div>
  );
}

export default App;
