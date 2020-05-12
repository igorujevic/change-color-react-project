import React from 'react';
import { css } from 'emotion';

const Color = ({ color }) => {
  return (
    <div>
      <h3
        className={css`
          font-size: 18px;
          margin: 0px 0px;
          font-weight: 600;
          color: ${color};
        `}
      >
        {color}
      </h3>
    </div>
  );
};

export default Color;
