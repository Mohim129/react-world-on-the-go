import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;


  const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (country) =>{
    // console.log(`I visited:`,country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const [visitedFlags, setVisitedFlags] =useState([]);

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags);

  }





  return (
    <>
      <h1>In the Countries: {countries.length}</h1>
      <h1>Total Visited: {visitedCountries.length}</h1>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>
            {country.name.common}
            {country.flags.flags.png}
          </li>
        ))}
      </ol>
      <div className='visited-flags-container'>
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;