import React from 'react';

const PaymentError = ({ message, onRetry }) => (
  <div className="error">
    <h2>⚠ Payment Failed</h2>
    <p>{message}</p>
    {onRetry && <button onClick={onRetry}>Try Again</button>}
  </div>
);

export default PaymentError;
