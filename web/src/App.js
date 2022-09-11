import React from 'react';
import './App.css';
import ImportZone from './components/Import';

function App() {
  return (
    <div className="App">
      {ImportZone()}
      <div>select group column</div>
      <div>define quantities for card</div>
      <div>save configs</div>
      <div>
        deck
        <div>cards</div>
      </div>
    </div>
  );
}

export default App;
