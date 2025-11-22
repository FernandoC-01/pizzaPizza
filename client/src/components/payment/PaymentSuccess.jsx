import React from 'react';

const PaymentSuccess = ({ transactionId, amount }) => (
  <div className="success">
    <h2>Payment Successful!</h2>
    <p>Transaction ID: {transactionId}</p>
    <p>Amount Charged: ${amount}</p>
    <p>Thank you for your purchase!</p>
  </div>
);

export default PaymentSuccess;
