import React from "react";
import "./Modal.scss";

function Modal({ header, closeButton, text, actions, onClose, showBackground }) {
  return (
    <div>
      <div className="custom-modal">
        <div className="modal-header">
          <h3>{header}</h3>
          {closeButton && (
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          )}
        </div>
        <div className="modal-content">
          <p>{text}</p>
        </div>
        <div className="modal-actions">{actions}</div>
      </div>
      {showBackground && (
        <div className="modal-background" onClick={onClose} />
      )}
    </div>
  );
}

export default Modal;
