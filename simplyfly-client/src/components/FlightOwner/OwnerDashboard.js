import React, { useState } from 'react';
import './OwnerDashboard.css';

function OwnerDashboard() {
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [newFlight, setNewFlight] = useState({
    name: '',
    origin: '',
    destination: '',
    fare: '',
    seats: ''
  });

  const handleAddFlight = () => {
    const flightId = Date.now(); // Unique ID
    const flight = { ...newFlight, id: flightId };
    setFlights([...flights, flight]);
    setNewFlight({ name: '', origin: '', destination: '', fare: '', seats: '' });
  };

  const handleDeleteFlight = (id) => {
    setFlights(flights.filter(f => f.id !== id));
  };

  const handleViewBookings = () => {
    // Dummy bookings 
    const dummyBookings = [
      { id: 1, flightName: 'Air India', user: 'user2@example.com', seats: 1 },
      { id: 2, flightName: 'IndiGo', user: 'user2@example.com', seats: 1 }
    ];
    setBookings(dummyBookings);
  };

  return (
    <div className="owner-dashboard">
      <h2>Welcome, Flight Owner!</h2>

      <div className="section">
        <h3>Add New Flight</h3>
        <input
          placeholder="Flight Name"
          value={newFlight.name}
          onChange={e => setNewFlight({ ...newFlight, name: e.target.value })}
        />
        <input
          placeholder="Origin"
          value={newFlight.origin}
          onChange={e => setNewFlight({ ...newFlight, origin: e.target.value })}
        />
        <input
          placeholder="Destination"
          value={newFlight.destination}
          onChange={e => setNewFlight({ ...newFlight, destination: e.target.value })}
        />
        <input
          placeholder="Fare"
          type="number"
          value={newFlight.fare}
          onChange={e => setNewFlight({ ...newFlight, fare: e.target.value })}
        />
        <input
          placeholder="Seats Available"
          type="number"
          value={newFlight.seats}
          onChange={e => setNewFlight({ ...newFlight, seats: e.target.value })}
        />
        <button className="btn-orange" onClick={handleAddFlight}>Add Flight</button>
      </div>

      <div className="section">
        <h3>Manage Flights</h3>
        {flights.length === 0 ? (
          <p>No flights added yet.</p>
        ) : (
          flights.map(f => (
            <div key={f.id} className="flight-card">
              <p><strong>{f.name}</strong> - {f.origin} to {f.destination}</p>
              <p>Fare: ₹{f.fare} | Seats: {f.seats}</p>
              <button className="btn-orange" onClick={() => handleDeleteFlight(f.id)}>Delete</button>
            </div>
          ))
        )}
      </div>

      <div className="section">
        <h3>Manage Bookings</h3>
        <button className="btn-orange" onClick={handleViewBookings}>Load Bookings</button>
        {bookings.map(b => (
          <div key={b.id} className="booking-card">
            <p>User: {b.user} | Flight: {b.flightName} | Seats: {b.seats}</p>
          </div>
        ))}
      </div>

      <div className="logout-section">
        <button className="btn-orange" onClick={() => window.location.href = '/login'}>Logout</button>
      </div>
    </div>
  );
}

export default OwnerDashboard;
