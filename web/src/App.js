import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        1. import spreadsheet
        {' '}
        {' '}
        <button
          type="button"
          onClick={
            () => console.log('click')
          }
        >
          Import CSV

        </button>
      </div>
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
