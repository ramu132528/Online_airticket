import React, { useState } from 'react';
import './UserDashboard.css';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const dummyFlights = [
      {
        id: 1,
        name: 'Air India',
        origin,
        destination,
        fare: 4500,
        availableSeats: 30
      },
      {
        id: 2,
        name: 'IndiGo',
        origin,
        destination,
        fare: 5000,
        availableSeats: 30
      }
    ];
    setFlights(dummyFlights);
  };

  const handleBookNow = (flightId) => {
    navigate('/seat-selection', { state: { selectedFlightId: flightId } });
  };

  const handleCancel = (bookingId) => {
    setBookings(bookings.filter(b => b.id !== bookingId));
  };

  return (
    <div className="user-dashboard-overlay">
      <div className="user-dashboard-content">
        <div className="search-section">
          <div className="search-box">
            <h2>Search Flights</h2>
            <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Origin"
              value={origin}
              onChange={e => setOrigin(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              required
            />
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
            <button className="btn-search" type="submit">Search</button>
          </form>
        </div>
      </div>


        {flights.length > 0 && (
          <div className="flights-section">
            <h3>Available Flights</h3>
            {flights.map(flight => (
              <div key={flight.id} className="card">
                <p><strong>{flight.name}</strong> - {flight.origin} to {flight.destination}</p>
                <p>Fare: ₹{flight.fare} | Seats Available: {flight.availableSeats}</p>
                <button onClick={() => handleBookNow(flight.id)}>Book Now</button>
              </div>
            ))}
          </div>
        )}

        <h2>My Bookings</h2>
        {bookings.length === 0 ? (
          <p className="no-bookings">No bookings yet.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="card booking-card">
              <p><strong>{booking.flightName}</strong> | {booking.origin} to {booking.destination}</p>
              <p>Date: {booking.date} | Seats: {booking.seats}</p>
              <button className="btn-cancel" onClick={() => handleCancel(booking.id)}>Cancel Booking</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
