import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/orderConfirmation.css';

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data passed from PaymentPage
  const { orderData, transactionId,  } = location.state || {};
  
  // If no data (user navigated directly), redirect home
  if (!orderData) {
    navigate('/');
    return null;
  }
  
  const currentDate = new Date().toLocaleString();
  
  return (
    <div className="order-confirmation-page">
      <div className="confirmation-icon">✓</div>
      <h1>Order Complete!</h1>
      <p className="success-message">Thank you for your order!</p>
      
      {/* Order Details Card */}
      <div className="order-card">
        <div className="order-header">
          <h2>Order Summary</h2>
          <p className="order-number">Order #: ORD-{Date.now()}</p>
          <p className="transaction-id">Transaction ID: {transactionId}</p>
          <p className="order-time">{currentDate}</p>
        </div>
        
        {/* Items List */}
        <div className="items-section">
          <h3>Items Ordered:</h3>
          {orderData.items.map((item, index) => (
            <div key={index} className="order-item">
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-specs">
                  {item.quantity && `Quantity: ${item.quantity}`}
                </p>
              </div>
              <p className="item-price">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        
        {/* Totals */}
        <div className="totals-section">
          <div className="total-line">
            <span>Subtotal:</span>
            <span>${orderData.subtotal.toFixed(2)}</span>
          </div>
          <div className="total-line">
            <span>Tax:</span>
            <span>${orderData.tax.toFixed(2)}</span>
          </div>
          <div className="total-line grand-total">

            <span>Total Paid:</span>

             {/* {!deliveryOrPickup && (
               <span>Total Paid:</span>
             )}

              {deliveryOrPickup && (
               <span>Total amount:</span>
             )}
           */}



            <span>${orderData.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {/* Restaurant Info */}
      <div className="restaurant-info-card">
        <h3>Pickup Information</h3>
        <p className="restaurant-name">Mom's and Pop's Pizzeria</p>
        <p>680 Arntson Rd, Suite 161</p>
        <p>Marietta, GA 30060</p>
        <p>Phone: 770-555-1212</p>
        <p>Website: MomAndPopPizzeria.com</p>
        <div className="hours">
          <p><strong>Operating Hours:</strong></p>
          <p>Mon-Thur: 9am - 11pm</p>
          <p>Fri-Sat: 11am - 12am</p>
        </div>
        <div className="pickup-estimate">
          <p><strong>Estimated Pickup Time:</strong></p>
          <p className="pickup-time">25-30 minutes</p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="print-btn" onClick={() => window.print()}>
          🖨️ Print Receipt
        </button>
        <button className="home-btn" onClick={() => navigate('/')}>
          Return to Home
        </button>
      </div>
      
      {/* Email Confirmation Notice */}
      <p className="email-notice">
        A confirmation email has been sent to your registered email address.
      </p>
    </div>
  );
}

export default OrderConfirmation;