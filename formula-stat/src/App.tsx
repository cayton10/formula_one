import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';


import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitButton from '../src/common-components/SubmitButton'
import { Menubar } from 'primereact/menubar';
import { MAIN_MENU_ITEMS } from './constants/main-menu-constants'


class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  // Render function
  render() {
    return (
      <div className="App">
        <div>
          <Menubar model={MAIN_MENU_ITEMS} p-menubar />
        </div>
        <header className="App-header">

          <SubmitButton submit={true} />
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
      </div>
    );
  }

}

export default App;
