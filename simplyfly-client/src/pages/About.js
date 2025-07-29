import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About SimplyFly</h1>
      <p className="about-tagline">
        Your trusted partner for easy, fast, and affordable air ticket booking.
      </p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          SimplyFly is an online air ticket booking platform offering real-time
          flight information, seamless booking, and great deals for both domestic
          and international flights. We aim to simplify air travel for everyone.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>✔️ Real-time flight search and booking</li>
          <li>✔️ Easy ticket cancellations and refunds</li>
          <li>✔️ User-friendly dashboards for passengers and flight owners</li>
          <li>✔️ Secure payment gateway and booking confirmation</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          With SimplyFly, your travel planning becomes effortless. We offer 24/7
          customer support, verified flight listings, and personalized
          recommendations based on your preferences.
        </p>
      </section>
    </div>
  );
};

export default About;
