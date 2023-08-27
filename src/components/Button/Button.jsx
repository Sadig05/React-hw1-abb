import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ backgroundColor, text, onClick, className }) {
  return (
    <button
      className={`custom-button ${className}`}
      style={{ backgroundColor }} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
