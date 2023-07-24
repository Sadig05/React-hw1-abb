
import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;

    return (
      <button className={`custom-button custom-button-${backgroundColor}`} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
