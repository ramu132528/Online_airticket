import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact SimplyFly</h1>
      <p className="contact-tagline">
        Have questions or need assistance? We’re here to help!
      </p>

      <div className="contact-info">
        <div className="contact-box">
          <h2>📍 Address</h2>
          <p>SimplyFly Headquarters<br />123 Sky Lane, Chennai, India</p>
        </div>

        <div className="contact-box">
          <h2>📞 Phone</h2>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-box">
          <h2>✉️ Email</h2>
          <p>support@simplyfly.com</p>
        </div>
      </div>

      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
