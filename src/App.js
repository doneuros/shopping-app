import React from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapTable from "./components/BootstrapTable"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Find a cheaper and environment friendlier product
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>        
      </header>
      <BootstrapTable/>
    </div>
  );
}

export default App;
