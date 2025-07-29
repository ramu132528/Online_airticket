// src/components/User/Payment.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const selectedSeats = state?.selectedSeats || [];
  const selectedFlightId = state?.selectedFlightId;

  const handlePayment = () => {
    alert(`Booking successful for Flight ID: ${selectedFlightId}, Seats: ${selectedSeats.join(', ')}`);
    navigate('/booking-success');
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Flight ID: {selectedFlightId}</p>
      <p>Total Amount: ₹{selectedSeats.length * 500}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
