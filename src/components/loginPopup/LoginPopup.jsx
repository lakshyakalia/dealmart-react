import React from "react";
import "./loginPopup.css";

export default function LoginPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Login Required</h2>
        <p>Please log in to add items to your cart.</p>
        <div className="popup-actions">
          <button onClick={onClose} className="close-btn">
            Close
          </button>
          <button
            onClick={() => (window.location.href = "/login")}
            className="login-btn"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
