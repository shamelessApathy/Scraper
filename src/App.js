import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      <body>    
        <h3 style={{color:'red', fontSize:24 + 'px', textAlign:'center'}}>  And this is the body element, soon to it's own component...
        </h3>
      </body>
    </div>
  );
}

export default App;
