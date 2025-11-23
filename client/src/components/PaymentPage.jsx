//Payment Page.jsx
import React, {useState} from 'react';
import{useNavigate, useLocation} from 'react-router-dom';
import PaymentForm from './payment/PaymentForm';
import PaymentError from './payment/PaymentError';
import PaymentSuccess from './payment/PaymentSuccess';
import '../styles/payment.css';

import Header from "./Header";

function PaymentPage() {

    const navigate = useNavigate();
    const location = useLocation();

    //Vars: delivery or pickup option
    const [deliveryOrPickup, SetDelveryOrPickup] = useState(false);
    const [addiontalInfo, SetAdditionalInfo] = useState('');
    const [streetAdress, SetStreetAdress] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [zip, SetZip] = useState('');

    const ChangeDelivery = () => { SetDelveryOrPickup(false); };
    const ChangePickup = () => { SetDelveryOrPickup(true); };


    const order = location.state?.order || {};

    const subTotal = location.state?.total || 0;
    const tax = subTotal * 0.06;
    const total = subTotal + tax;

    //STATE: store payment status 
    const [paymentStatus, setPaymentStatus] = useState('form');

    //STATE: store transaction ID after succesful payment
    const [transactionId, setTransactionId] = useState(null);

    //STATE: store error message after failed payment
    const [errorMessage, setErrorMessage] = useState(' ');



    // Use order data from location.state if available, else fallback to mock
    const orderData = location.state?.orderData || location.state?.cartData || {
        // items: [
        //     { name: 'Pepperoni Pizza(Large)', price:15.99, quantity: 1 },
        // ]

        order: order,
        
        
        subtotal: subTotal,
        tax: tax,
        total: total
    };


    //FUNCTION: Handle ZIP code input to allow only numbers
        const HandleZip = (e) => {
        const inputValue = e.target.value;
        const numericRegex = /^[0-9]*$/;
        if (inputValue === '' || numericRegex.test(inputValue)) {
            SetZip(inputValue);
            }
            else{
                alert("ZIP only accepts numbers")
            }
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
                    transactionId: txnId,
                    // deliveryOrPickup: deliveryOrPickup
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
       

    <div>

         <Header></Header>

        
       <div className="payment-page" style={{
            minHeight: '100vh',
            width: '100%',
            padding: '40px 20px',
            boxSizing: 'border-box',
        }}>
           
            
           <h1>Complete Your Payment</h1>
           {/* Render different components based on status */}



            <div className="order-input-card">
                {/*Shows Delivery Options When deliveryOrPickup is false and Pickup options when it is true*/}
                <button className="deilveryOrPickup-btn" onClick={ChangeDelivery}> Delivery </button>
                <button className="deilveryOrPickup-btn" onClick={ChangePickup}>  Pickup </button>
                    {!deliveryOrPickup && (
                        <div className="order-userData-position"> 
                            <h4>Street Address</h4>
                            
                            <input className="order-inputs" type="text" value = {streetAdress} onChange={(e) => SetStreetAdress(e.target.value)}/>

                            <h4>City</h4>
                            <input className="order-inputs" type="text" value = {city} onChange={(e) => SetCity(e.target.value)}/>

                            <h4>State</h4>
                            <input className="order-inputs" type="text" value = {state} onChange={(e) => SetState(e.target.value)}/>

                            <h4>ZIP</h4>
                                <input className="order-inputs" type="text" value = {zip} onChange={HandleZip}/>

                            <h4>Addtional Info</h4>
                            <input className="order-inputs" type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>   
                                    <br />
                                    <button className="submit-button" onClick={ () =>   {navigate('/order-confirmation', 
                                            {
                                                state:
                                                {
                                                    orderData,
                                                    transactionId: 'TXN-' + Math.random().toString(36).substr(2, 9),
                                                    
                                                }
                                            })
                                        }}>

                                        Pay ${Math.round(total*100)/100}

                                    </button>
                                     
                                        {/* {paymentStatus === 'form' && (
                                        <PaymentForm onSubmit={handlePaymentSubmit}  />
                                         )}  */}
                        </div>
                    )}

                    {deliveryOrPickup && (
                        <div className="order-userData-position"> 
                            <h4>Addtional Info</h4>
                            <input className="order-inputs" type="text" value = {addiontalInfo} onChange={(e) => SetAdditionalInfo(e.target.value)}/>   
                        
                             <button type="submit" className="submit-button" onClick={

                                () =>   {navigate('/order-confirmation', 
                                            {
                                                state:
                                                {
                                                    orderData,
                                                    transactionId: 'TXN-' + Math.random().toString(36).substr(2, 9),

                                                    // deliveryOrPickup: deliveryOrPickup
                                                }
                                            })
                                        }}>
                                Submit Order 
                                </button>

                        </div>
                     )} 

            </div>





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

    </div>
    );
}

//EXPORT: other files can import PaymentPage component
export default PaymentPage;