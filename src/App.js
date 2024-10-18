import React, { useState } from 'react';
import axios from 'axios';

const CitySearch = () => {
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  // Get latitude/longitude for the given city
  const fetchCoordinates = async () => {
    try {
      setError('');
      const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)},Tamil Nadu`;
      const response = await axios.get(nominatimUrl);
      if (response.data.length === 0) {
        setError('No location found in Tamil Nadu. Please enter a valid city.');
        return;
      }
      const { lat, lon } = response.data[0];
      fetchNearbyCities(lat, lon);
    } catch (error) {
      setError('Error fetching coordinates.');
      console.error(error);
    }
  };

  // Fetch cities within 10 km radius using Overpass API
  const fetchNearbyCities = async (lat, lon) => {
    try {
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node[place](around:10000,${lat},${lon});out;`;
      const response = await axios.get(overpassUrl);
      if (response.data.elements.length === 0) {
        setError('No nearby cities found.');
        return;
      }
      setCities(response.data.elements);
    } catch (error) {
      setError('Error fetching nearby cities.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Search for Nearby Cities</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city in Tamil Nadu"
      />
      <button onClick={fetchCoordinates}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {cities.length > 0 && cities.map((city, index) => (
          <li key={index}>
            {city.tags.name} (Lat: {city.lat}, Lon: {city.lon})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;
