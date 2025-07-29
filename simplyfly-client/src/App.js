import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserDashboard from './components/User/UserDashboard';
import OwnerDashboard from './components/FlightOwner/OwnerDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/common/Navbar';
import Layout from './components/common/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Flights from './pages/Flights';
import SeatSelection from './components/User/SeatSelection';
import Payment from './components/User/Payment';
import BookingSuccess from './components/User/BookingSuccess';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/user/dashboard" element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          } />
          <Route path="/owner/dashboard" element={
            <PrivateRoute>
              <OwnerDashboard />
            </PrivateRoute>
          } />
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
