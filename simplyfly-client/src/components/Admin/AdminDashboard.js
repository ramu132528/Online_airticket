import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [owners, setOwners] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Simulate data loading
  const loadUsers = () => {
    setUsers([
      { id: 1, email: 'user1@example.com' },
      { id: 2, email: 'user2@example.com' },
    ]);
  };

  const loadOwners = () => {
    setOwners([
      { id: 1, name: 'Owner A' },
      { id: 2, name: 'Owner B' },
    ]);
  };

  const loadRoutes = () => {
    setRoutes([
      { id: 1, from: 'Chennai', to: 'Delhi' },
      { id: 2, from: 'Mumbai', to: 'Bangalore' },
    ]);
  };

  const loadBookings = () => {
    setBookings([
      { id: 1, user: 'user1@example.com', flight: 'Air India' },
      { id: 2, user: 'user2@example.com', flight: 'IndiGo' },
    ]);
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      <div className="section">
        <h3>User Management</h3>
        <button className="orange-btn" onClick={loadUsers}>Load Users</button>
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.email}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Manage Flight Owners</h3>
        <button className="orange-btn" onClick={loadOwners}>Load Owners</button>
        <ul>
          {owners.map(o => (
            <li key={o.id}>{o.name}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Manage Routes</h3>
        <button className="orange-btn" onClick={loadRoutes}>Load Routes</button>
        <ul>
          {routes.map(r => (
            <li key={r.id}>{r.from} → {r.to}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Manage Bookings</h3>
        <button className="orange-btn" onClick={loadBookings}>Load Bookings</button>
        <ul>
          {bookings.map(b => (
            <li key={b.id}>{b.user} booked {b.flight}</li>
          ))}
        </ul>
      </div>

      <button className="logout-btn">Logout</button>
    </div>
  );
}

export default AdminDashboard;
