import React from 'react';

export default function ConfigsZone() {
  return (
    <div>

      <div>
        2. select group column
        {' '}
        <select><option>Opção 1</option></select>
      </div>

      <div>
        3. define quantities for card
        {' '}
        <input type="number" min="1" max="100" defaultValue="5" />
      </div>

      <div>
        <button
          type="button"
          onClick={ () => console.log('save configs') }
        >
          4. save configs
        </button>

      </div>

    </div>
  );
}
