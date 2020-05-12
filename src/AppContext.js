import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [colors, setColors] = useState([
    {
      color: 'white',
      id: 1,
    },
  ]);
  return (
    <AppContext.Provider value={[colors, setColors]}>
      {props.children}
    </AppContext.Provider>
  );
};
