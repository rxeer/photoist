import React from 'react';
import successMessage from '../assets/images/success.svg';

export default function SuccessMessage() {
  return (
    <div className="success-message">
      <img src={successMessage} />
      <h1 className="success-message__title">Thank you for your feedback</h1>
    </div>
  );
}
