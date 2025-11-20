//Payment Page.jsx
import React, {useState} from 'react';
import PaymentForm from '../components/payment/PaymentForm';
import '../styles/payment.css';

function PaymentPage() {

    //STATE: store payment status 
    const [paymentStatus, setPaymentStatus] = useState('form');

    //STATE: store transaction ID after succesful payment
    const [transactionId, setTransactionId] = useState(null);

    //STATE: store error message after failed payment
    const [errorMessage, setErrorMessage] = useState(' ');

    //MOCK DATA: order details (replace with real data later)
    const orderData = {
        items: [
            { name: 'Pepperoni Pizza(Large)', price:15.99, quantity: 1 },
        ],
        subtoal: 15.99,
        tax: 1.28,
        total: 17.27
    };

    //FUNCTION: handle payment form submission
    const handlePaymentSubmit = (paymentData) => {
        console.log('Payment submitted:', paymentData);

        //Change status to show loading spinner
        setPaymentStatus('processing');

        //Simulate API call with setTimeout(replace later)
        setTimeout(() => {
            //Simulate success
            setTransactionId('TXN-' + Math.random().toString(36).substr(2, 9));
            setPaymentStatus('success');
        }, 2000);
    };

    //FUNCTION: Reset payment form if user wants to try again
    const handleRetry = () => {
        setPaymentStatus('form');
        setErrorMessage(' ');
    };
    return (
        <div className="payment-page">
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
            <div className="success">
                <h2>Payment Successful!</h2>
                <p>Transaction ID: {transactionId}</p>
                <p>Amount Charged: $XX.XX</p>
                <p>Thank you for your purchase!</p>

            </div>
           )}

           {paymentStatus === 'error' && (
            <div className="error">
                <h2>⚠Payment Failed</h2>
                <p>{errorMessage}</p>
                <button onClick={handleRetry}>Try Again</button>
            </div>
           )}
        </div>
    );
}

//EXPORT: other files can import PaymentPage component
export default PaymentPage;