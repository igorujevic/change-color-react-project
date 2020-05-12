import React, { useState, useContext } from 'react';
import { css } from 'emotion';
import axios from 'axios';

import { AppContext } from '../../AppContext';

// const url = 'http://www.colr.org/json/color/random';

const ButtonColorPicker = (props) => {
  const [color, setColor] = useState('');
  const [colors, setColors] = useContext(AppContext);

  // ne koristim ovu funkciju jer link s kojeg se dohvaća boja nudi samo jednu random boju
  // sve dok se ponovno ne refresha
  async function changeColor() {
    try {
      let response = await axios.get('http://www.colr.org/json/color/random');
      let colorData = '#' + response.data.colors[0].hex;
      setColor(colorData);
      // return response.data.colors[0].hex;
    } catch (error) {
      console.log(error);
    }
  }

  const genHexColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = '#' + randomColor;
    setColor(randomColor);
  };

  const addColor = () => {
    genHexColor();
    setColors((prevColors) => [
      ...prevColors,
      { colorName: color, id: Math.floor(Math.random() * 50000) },
    ]);
  };

  return (
    <div>
      <button
        className={css`
          padding: 32px;
          font-size: 24px;
          font-weight: 600;
          border-radius: 4px;
          color: ${color};
          cursor: pointer;
        `}
        onClick={addColor}
      >
        GET COLOR
      </button>
    </div>
  );
};

export default ButtonColorPicker;
