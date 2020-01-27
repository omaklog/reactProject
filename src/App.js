import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons'

import {ReactComponent as ReactLogo} from './assets/react.svg'

function App() {

    const showNameConsole=(name)=>{
        console.log(name);
    }

  const users=[
          {
          nombre:"Agustín Navarro",
          edad:26
          },
          {
            nombre:"Carlos Perez",
            edad:29
          },          {
            nombre:"Raúl Ruíz",
            edad:16
          }
  ]

  return (
    <div className="App">
        <h1>Mi App</h1>
        <Buttons fnShowName={showNameConsole}></Buttons>
        <ReactLogo style={{whidt:150, height:150}}></ReactLogo>
    </div>
  );
}

export default App;
