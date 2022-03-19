import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>The World Is Hare</h1>
            <div className='countries-container'>
            <Country></Country>
            {
                countries.map(country => <Country 
                    key={country.alpha3Code}
                    country={country}
                    img={country.flags.png}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    area={country.area}
                    region={country.region}

                    ></Country>)
            }
            </div>
        </div>
    );
};
export default Countries;