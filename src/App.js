import React from 'react';
import logo from './TestLogoAlpha.png';
import './App.css';
import BootstrapTable from "./components/Table/BootstrapTable"

function App() {
  return (
    <div className="App">   
      <header className="App-header flex-container">
        <div className="flex-item">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="flex-item">
            <p>
              Find a cheaper and environment friendlier product
            </p>
        </div>
        <div className="flex-item">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <BootstrapTable/>
    </div>
  );
}

export default App;
