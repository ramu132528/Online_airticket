import React, { useState } from 'react';
import './Flights.css';

function Flights() {
  const [search, setSearch] = useState({
    origin: '',
    destination: '',
    date: '',
  });

  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // You can replace this with a real API call in the future
    const dummyFlights = [
      { id: 1, airline: 'Air India', time: '10:00 AM', price: '₹4,500' },
      { id: 2, airline: 'IndiGo', time: '12:30 PM', price: '₹5,000' },
      { id: 3, airline: 'SpiceJet', time: '3:45 PM', price: '₹4,200' },
    ];
    setResults(dummyFlights);
    setShowResults(true);
  };

  return (
    <div className="flights-container">
      <h2>Search Flights</h2>

      <div className="search-form">
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={search.origin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={search.destination}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={search.date}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showResults && results.length > 0 && (
        <div className="results">
          <h3>Available Flights:</h3>
          <div className="flight-list">
            {results.map((flight) => (
              <div key={flight.id} className="flight-card">
                <p><strong>{flight.airline}</strong></p>
                <p>Departure: {flight.time}</p>
                <p>Price: {flight.price}</p>
                <button>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showResults && results.length === 0 && (
        <p>No flights found for the selected route and date.</p>
      )}
    </div>
  );
}

export default Flights;
