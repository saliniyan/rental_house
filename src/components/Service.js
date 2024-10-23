import React from 'react';
import Navbar from './Navbar';


const Services = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>Our Services</h1>
      <p>We offer a range of services to meet the diverse needs of our users:</p>
      <h2>1. Property Listings</h2>
      <p>Browse through a wide array of properties available for rent in your desired city.</p>
      
      <h2>2. 360-Degree Views</h2>
      <p>Experience virtual tours of properties before you visit, making it easier to find the right fit.</p>

      <h2>3. Advanced Search Options</h2>
      <p>Filter listings by price, location, number of bedrooms, and more to find your ideal home.</p>

      <h2>4. User Accounts</h2>
      <p>Register to save your favorite properties, receive notifications about new listings, and connect directly with landlords.</p>
      
      <h2>5. Local Insights</h2>
      <p>Get information about neighborhoods, schools, and amenities in the area you’re considering.</p>
    </div>
  );
};

export default Services;
