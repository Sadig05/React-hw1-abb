import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string, 
  };

  static defaultProps = {
    
    className: '', 
  };

  render() {
    const { backgroundColor, text, onClick, className } = this.props;

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
}

export default Button;
