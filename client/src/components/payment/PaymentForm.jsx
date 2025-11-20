import React, { useState } from 'react';

function PaymentForm({ onSubmit }) {
    //STATE: form fields
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        const cleanCardNumber = cardNumber.replace(/\s+/g, '');
        if(cleanCardNumber.length !== 16 || !/^\d{16}$/.test(cleanCardNumber)) {
            newErrors.cardNumber = 'Card number must be 16 digits';
        }

        if(cardHolderName.trim() === '') {
            newErrors.cardHolderName = 'Card holder name is required';
        }

        if(!/^\d{2}\/\d{2}$/.test(expirationDate)) {
            newErrors.expirationDate = 'Expiration date must be in MM/YY format';
        }

        if(cvv.length !== 3 ) {
            newErrors.cvv = 'CVV must be 3 digits';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) {
            return;
        }

        const paymentData = {
            cardNumber,
            cardHolderName,
            expirationDate,
            cvv,
            amount: 'XX.XX' // Placeholder amount
        };

        onSubmit(paymentData);
    };

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        setCardNumber(formattedValue);
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19} // 16 digits + 3 spaces
                />

                {errors.cardNumber && (
                    <span className="error-message">{errors.cardNumber}</span>
                )}
            </div>
            
            <div className="form-group">
                <label htmlFor="cardHolderName">Cardholder Name</label>
                <input
                    type="text"
                    id="cardHolderName"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                />
                {errors.cardHolderName && (
                    <span className="error-message">{errors.cardHolderName}</span>
                )}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="expirationDate">Expiration Date (MM/YY)</label>
                    <input
                        type="text"
                        id="expirationDate"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        placeholder ="MM/YY"
                        maxLength={5}
                    />
                    {errors.expirationDate && (
                        <span className="error-message">{errors.expirationDate}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder= "123"
                        maxLength={3}
                    />
                    {errors.cvv && (
                        <span className="error-message">{errors.cvv}</span>
                    )}
                </div>
            </div>

            <button type="submit" className="submit-button">
                Pay ${amount ? amount.toFixed(2):'0.00'}
                </button>
        </form>
    );
}

export default PaymentForm;