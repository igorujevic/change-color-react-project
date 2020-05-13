import React, { useState, createContext } from 'react';

export const WritingContext = createContext();

export const WritingProvider = (props) => {
  const [write, setWrite] = useState('');

  return (
    <WritingContext.Provider value={[write, setWrite]}>
      {props.children}
    </WritingContext.Provider>
  );
};
