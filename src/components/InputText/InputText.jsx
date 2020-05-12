import React from 'react';

export default function InputText({ handleInput }) {
  return (
    <div>
      <input type="text" onChange={() => handleInput()}></input>
    </div>
  );
}
