import React from 'react';
import { css } from 'emotion';

const ButtonColorPicker = ({ changeColor, textColor }) => {
  let color = '#' + textColor;
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
        onClick={() => changeColor()}
      >
        GET COLOR
      </button>
    </div>
  );
};

export default ButtonColorPicker;
