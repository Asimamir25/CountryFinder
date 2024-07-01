import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./countries.css";
const Countries = ({ searchTerm, filterRegion }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://restcountries.com/v3.1/all";
      if (filterRegion) {
        url = `https://restcountries.com/v3.1/region/${filterRegion}`;
      }
      const result = await fetch(url);
      const data = await result.json();
      setCountries(data);
      setFilteredCountries(data);
    };
    fetchData();
  }, [filterRegion]);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm]);

  return (
    <div className="body">
      <div className="grid">
        {filteredCountries.map((item, index) => {
          const { name, capital, flags, population, region } = item;
          return (
            <Link
              className="link"
              to={`/definition/${name.common}`}
              key={index}
            >
              <div>
                <div className="container">
                  <img src={flags.png} className="flag" />
                  <div className="card">
                    <p>{name.common}</p>
                    <div className="container">
                      <h4>
                        Population: <span>{population}</span>
                      </h4>
                      <h3>
                        Region: <span>{region}</span>
                      </h3>
                      <h3>
                        Capital: <span>{capital}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
