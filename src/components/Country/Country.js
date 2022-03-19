import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <h3>Capital: {props.capital}</h3>
            <h4>Population: {props.population}</h4>
            <p>Area: {props.area}</p>
            <p>Region: {props.region}</p>
        </div>
    );
};

export default Country;