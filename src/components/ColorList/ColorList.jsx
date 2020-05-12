import React, { useState, useContext } from 'react';
import { css } from 'emotion';

import { AppContext } from '../../AppContext';
import Color from './Color';

const ColorList = () => {
  const [colors, setColors] = useContext(AppContext);

  return (
    <div>
      <h1>PREV COLORS:</h1>
      {colors.map((color) => (
        <Color color={color.colorName} key={color.id} />
      ))}
    </div>
  );
};

export default ColorList;
