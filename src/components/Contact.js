import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, reach out to us:</p>
      <h2>Email</h2>
      <p>If you have inquiries about our services, please email us at: <a href="mailto:contact@housefinder.com">contact@housefinder.com</a></p>
      
      <h2>Phone</h2>
      <p>Call us at: (123) 456-7890</p>
      
      <h2>Follow Us</h2>
      <p>Stay updated with the latest listings and news by following us on social media:</p>
      <ul>
        <li><a href="https://twitter.com/housefinder">Twitter</a></li>
        <li><a href="https://facebook.com/housefinder">Facebook</a></li>
        <li><a href="https://instagram.com/housefinder">Instagram</a></li>
      </ul>
    </div>
  );
};

export default Contact;
