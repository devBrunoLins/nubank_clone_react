import React from 'react';
import logo from './img/nubank.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="description_home">
        <h1>Ser NuBank é ter uma vida financeira descomplicada.</h1>
      </div>
      <div className="buttons">
        <button className="btn -primary">quero ser nubank</button>
        <button className="btn -secondary">já tenho convite</button>
        <button className="btn -login">login</button>
      </div>
    </div>
  );
}

export default App;
