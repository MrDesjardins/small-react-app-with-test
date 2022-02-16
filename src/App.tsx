import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Fetch } from './Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <p>
        <Fetch url="https://api.github.com/gists/public" />
      </p>
    </div>
  );
}

export default App;
