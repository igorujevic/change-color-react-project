import React, { useContext } from 'react';

import { WritingContext } from '../../WritingContext';

import styles from './ShowText.module.css';

export default function ShowText() {
  const [write] = useContext(WritingContext);
  return (
    <div>
      <textarea
        maxLength="100"
        rows="4"
        cols="40"
        placeholder={write ? write : 'Write down..'}
        className={styles.textShow}
      ></textarea>
    </div>
  );
}
