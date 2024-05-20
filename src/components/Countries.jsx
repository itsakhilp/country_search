import React, { useState, useEffect } from 'react';
import './Countries.css';
import { FaSearch } from "react-icons/fa";

const Countries = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/countryData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = data.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredData = selectedCountry
    ? data.filter(country => country.name === selectedCountry)
    : filteredCountries;

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          id="search"
          placeholder="Search for your country"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select id='dropdown' value={selectedCountry} onChange={handleCountryChange}>
          <option value="">All Countries</option>
          {filteredCountries.map(country => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="cards-container">
        {filteredData.map(item => (
          <div className="card" key={item.name}>
            <img src={item.flags.png} alt={item.flags.svg} className="card-image" />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>Population: {item.population}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
