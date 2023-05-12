import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
