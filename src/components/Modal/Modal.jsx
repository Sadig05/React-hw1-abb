import React from "react";
import "./Modal.scss";

class Modal extends React.Component {
  render() {
    const { header, closeButton, text, actions } = this.props;

    return (
      <div>
        <div className="custom-modal">
          <div className="modal-header">
            <h3>{header}</h3>
            {closeButton && (
              <span className="modal-close" onClick={this.props.onClose}>
                &times;
              </span>
            )}
          </div>
          <div className="modal-content">
            <p>{text}</p>
          </div>
          <div className="modal-actions">{actions}</div>
        </div>
        {this.props.showBackground && (
          <div className="modal-background" onClick={this.props.onClose} />
        )}
      </div>
    );
  }
}

export default Modal;
