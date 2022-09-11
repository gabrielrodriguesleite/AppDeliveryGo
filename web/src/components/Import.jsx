import React from 'react';

export default function ImportZone() {
  return (
    <div>
      1. import spreadsheet
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
  );
}
