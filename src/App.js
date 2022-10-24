import logo from './logo.svg';
import './App.css';
import _ from 'lodash';


function App() {
  const _ = require("lodash");
  let table = [15, 7, 38, 46, 82];

  console.log("Srednia "+_.mean(table));
  console.log("Maksymalna wartosc "+_.max(table));
  console.log("Minimalna wartosc "+_.min(table));

  return (
    <div className="App">
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
