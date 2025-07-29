import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">

      {/* Video Banner */}
      <div className="video-banner">
        <video autoPlay loop muted>
          <source src="/airplane.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-overlay">
          <h1>Fly with Confidence</h1>
          <p>Book domestic and international flights easily and securely</p>

          {/* Login / Register Buttons */}
          <div className="cta-buttons">
            <Link to="/login" className="btn-orange">Login</Link>
            <Link to="/register" className="btn-orange">Register</Link>
          </div>
        </div>
      </div>

      {/* Animated Destinations */}
      <div className="hero-section">
        <p className="animated-text">
          Fly to <span className="typewriter-text"></span>
        </p>
      </div>

      {/* Why Choose SimplyFly */}
      <section className="features-section">
        <h2>Why Choose SimplyFly?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Easy Booking</h3>
            <p>Quick and simple flight reservations with real-time confirmation.</p>
          </div>
          <div className="feature-box">
            <h3>Secure Payments</h3>
            <p>Your payment information is safe with our encrypted gateway.</p>
          </div>
          <div className="feature-box">
            <h3>24/7 Support</h3>
            <p>Our support team is available anytime you need assistance.</p>
          </div>
          <div className="feature-box">
            <h3>Real-time Updates</h3>
            <p>Stay informed with instant updates on flight status and bookings.</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="trust-section">
        <div className="badge">
          <span>✅</span>
          <p>1M+ Happy Travelers</p>
        </div>
        <div className="badge">
          <span>🌍</span>
          <p>100+ Destinations</p>
        </div>
        <div className="badge">
          <span>🛫</span>
          <p>500+ Airlines</p>
        </div>
        <div className="badge">
          <span>⏱</span>
          <p>Instant Booking Confirmation</p>
        </div>
      </div>

      {/* Counters */}
      <section className="counter-section">
        <h3>1 Million+</h3>
        <p>Tickets Booked</p>
        <h3>500+</h3>
        <p>Airlines</p>
      </section>
    </div>
  );
}

export default Home;
