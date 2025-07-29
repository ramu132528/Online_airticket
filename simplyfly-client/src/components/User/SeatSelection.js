import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SeatSelection.css';

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedFlightId } = location.state || {};

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const proceedToPayment = () => {
    if (selectedSeats.length === 0) {
      alert('Select at least one seat');
      return;
    }
    navigate('/payment', {
      state: { selectedSeats, selectedFlightId }
    });
  };

  return (
    <div className="seat-selection-container">
      <h2>Select Your Seats</h2>
      <div className="seats-grid">
        {seats.map(seat => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <button onClick={proceedToPayment}>Proceed to Payment</button>
    </div>
  );
}

export default SeatSelection;
