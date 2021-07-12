import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Democracy Manifest roster tool
        </h1>
      </header>

      <Link to="/sod" className="navigation-button">
          9.1 Roster
      </Link>

    </div>
  );
}

export default App;
