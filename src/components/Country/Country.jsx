import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const area = country.area.area;
  // console.log(handleVisitedCountries)
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if(visited){
    // setVisited(false)
    // } else{
    //   setVisited(true)
    // }

    // setVisited(visited? false:true)

    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img
        className="visited-flags-container"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <div>
        <h3>Name: {country.name.common}</h3>
        <p>Officially: {country.name.official}</p>
        <p>
          Area: {area} sqkm {area > 300000 ? "Big Country" : "Small Country"}
        </p>
        <button onClick={handleVisited}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          onClick={() => {
            handleVisitedFlag(country.flags.flags.png);
          }}
        >
          Add visited flag
          {/* {visited ? "" : "Add Visited Flag"} */}
        </button>
      </div>
    </div>
  );
};

export default Country;



//     "name": {
//         "common": "Singapore",
//         "official": "Republic of Singapore"
//     },
//     "ccn3": {
//         "ccn3": "702"
//     },
//     "currencies": {
//         "currencies": {
//             "SGD": {
//                 "name": "Singapore dollar",
//                 "symbol": "$"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Singapore"
//         ]
//     },
//     "region": {
//         "region": "Asia"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "zho": "Chinese",
//             "msa": "Malay",
//             "tam": "Tamil"
//         }
//     },
//     "area": {
//         "area": 710
//     },
//     "cca3": {
//         "cca3": "SGP"
//     },
//     "population": {
//         "population": 5685807
//     },
//     "continents": {
//         "continents": [
//             "Asia"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/sg.png",
//             "svg": "https://flagcdn.com/sg.svg",
//             "alt": "The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon."
//         }
//     }