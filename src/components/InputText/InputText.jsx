import React, { useContext } from 'react';

import { WritingContext } from '../../WritingContext';

import styles from './InputText.module.css';

export default function InputText() {
  const [, setWrite] = useContext(WritingContext);

  const handleInput = (event) => {
    console.log(event.target.value);
    setWrite(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write here.."
        onChange={handleInput}
        className={styles.inputText}
      ></input>
    </div>
  );
}
