import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleClick, index }) => (
  <section className={styles.controls}>
    <button
      name="prev"
      value="previous"
      type="button"
      className={styles.button}
      onClick={handleClick}
      disabled={!index}
    >
      To Back
    </button>
    <button
      name="next"
      value="next"
      type="button"
      className={styles.button}
      onClick={handleClick}
      disabled={index === 11}
    >
      To Next
    </button>
  </section>
);

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Controls;
