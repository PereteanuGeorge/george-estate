// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000  // High z-index to cover everything else
    }}>
      <div className="modal-content" style={{
        position: 'relative',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto'  // Allows scrolling
      }}>
        <button onClick={onClose} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
