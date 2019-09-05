import React from 'react';
import logo from './img/nubank.png';
import Drawer from '@material-ui/core/Drawer';
import './App.css';
import DrawerContent from './components/DrawerContent';

function App() {

  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="description_home">
        <h1>Ser NuBank é ter uma vida financeira descomplicada.</h1>
      </div>
      <div className="buttons">
        <button onClick={toggleDrawer('bottom', true)} className="btn -primary">quero ser nubank</button>
        <button className="btn -secondary">já tenho convite</button>
        <button className="btn -login">login</button>
      </div>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        <DrawerContent></DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;
