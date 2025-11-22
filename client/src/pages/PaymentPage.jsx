//Payment Page.jsx
import React, {useState} from 'react';
import{useNavigate, useLocation} from 'react-router-dom';
import PaymentForm from '../components/payment/PaymentForm';
import PaymentError from '../components/payment/PaymentError';
import PaymentSuccess from '../components/payment/PaymentSuccess';
import '../styles/payment.css';

function PaymentPage() {

    const navigate = useNavigate();
    const location = useLocation();

    //STATE: store payment status 
    const [paymentStatus, setPaymentStatus] = useState('form');

    //STATE: store transaction ID after succesful payment
    const [transactionId, setTransactionId] = useState(null);

    //STATE: store error message after failed payment
    const [errorMessage, setErrorMessage] = useState(' ');

    // Use order data from location.state if available, else fallback to mock
    const orderData = location.state?.orderData || location.state?.cartData || {
        items: [
            { name: 'Pepperoni Pizza(Large)', price:15.99, quantity: 1 },
        ],
        subtotal: 15.99,
        tax: 1.28,
        total: 17.27
    };

    //FUNCTION: handle payment form submission
    const handlePaymentSubmit = (paymentData) => {
        console.log('Payment submitted:', paymentData);

        //Change status to show loading spinner
        setPaymentStatus('processing');

        //Simulate API call with setTimeout(replace later.. maybe)
        setTimeout(() => {
            // Simulate error if card number is '0000 0000 0000 0000'
            if (paymentData.cardNumber.replace(/\s/g, '') === '0000000000000000') {
                setErrorMessage('Payment failed: Invalid card number.');
                setPaymentStatus('error');
                return;
            }
            //Simulate success
            const txnId = 'TXN-' + Math.random().toString(36).substr(2, 9);
            setTransactionId(txnId);
            setPaymentStatus('success');
            // Redirect to order confirmation page after success, pass order and transaction
            navigate('/order-confirmation', {
                state: {
                    orderData,
                    transactionId: txnId
                }
            });
        }, 2000);
    };

    //FUNCTION: Reset payment form if user wants to try again
    const handleRetry = () => {
        setPaymentStatus('form');
        setErrorMessage(' ');
    };
    return (
        <div className="payment-page" style={{
            minHeight: '100vh',
            width: '100%',
            padding: '40px 20px',
            boxSizing: 'border-box',
        }}>
            
           <h1>Complete Your Payment</h1>
           {/* Render different components based on status */}

           {paymentStatus === 'form' && (
            <PaymentForm onSubmit={handlePaymentSubmit} />
           )}

           {paymentStatus === 'processing' && (
            <div className="loading">
                <p>Processing your payment...</p>
                <div className="spinner"></div>
            </div>
           )}

           {paymentStatus === 'success' && (
            <PaymentSuccess transactionId={transactionId} amount={orderData.total?.toFixed(2) || 'XX.XX'} />
           )}

           {paymentStatus === 'error' && (
            <PaymentError message={errorMessage} onRetry={handleRetry} />
           )}
        </div>
    );
}

//EXPORT: other files can import PaymentPage component
export default PaymentPage;