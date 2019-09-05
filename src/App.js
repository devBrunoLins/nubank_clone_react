import React from 'react';
import logo from './img/nubank.png';
import './App.css';
import DrawerContent from './components/DrawerContent/DrawerContent';
import ICanBeNubank from './components/ICanBeNubank/ICanBeNubank';
import Login from './components/Login/Login';
import AlreadyHaveInvitation from './components/AlreadyHaveInvitation/AlreadyHaveInvitation';

function App() {
  const [content, setContent] = React.useState(null);

  const defineContent = (o) => setContent(o);
  
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="description_home">
        <h1>Ser NuBank é ter uma vida financeira descomplicada.</h1>
      </div>
      <div className="buttons">
        <button onClick={() => defineContent(ICanBeNubank)} className="btn -primary">quero ser nubank</button>
        <button onClick={() => defineContent(AlreadyHaveInvitation)} className="btn -secondary">já tenho convite</button>
        <button onClick={() => defineContent(<Login />)} className="btn -login">login</button>
      </div>
      <DrawerContent anchor={'bottom'} content={content} toggleHandler={setContent}></DrawerContent>
    </div>
  );
}

export default App;
