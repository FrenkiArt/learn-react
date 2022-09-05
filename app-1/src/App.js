import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("test text");

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  function inputHandler(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>хе-хе</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>

      <main>
        <h2>{likes}</h2>

        <p>
          <button onClick={increment} className="btn-1">
            Increment
          </button>
          <button onClick={decrement} className="btn-1">
            Decrement
          </button>
        </p>

        <h2>{value}</h2>
        <p>
          <input
            type="text"
            onChange={inputHandler}
            defaultValue={value}
            className="input"
          ></input>
        </p>
      </main>
    </div>
  );
}

export default App;
