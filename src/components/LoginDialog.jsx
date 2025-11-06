import React from 'react';
import './LoginDialog.css';

const LoginDialog = ({ open = true, onClose }) => {
  if (!open) return null;
  return (
    <div className="dialog" role="dialog" aria-modal="true">
      <div className="dialog-content">
        <h2>Access Denied</h2>
        <p>Sorry, to access this feature you must be logged in.</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginDialog;
