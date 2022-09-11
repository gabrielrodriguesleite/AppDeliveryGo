import React from 'react';
import './App.css';
import ConfigsZone from './components/Configs';
import ImportZone from './components/Import';

function App() {
  return (
    <div className="App">
      {ImportZone()}
      {ConfigsZone()}
      <div>
        deck
        <div>cards</div>
      </div>
    </div>
  );
}

export default App;
