import React, {useEffect, useState} from 'react'
import Weather from './Weather'

const Display = (props) => {
    var filteredCountries = props.filteredCountries
    const capital = filteredCountries[0].capital

    return (
        <div>
        <h2>{filteredCountries[0].name}</h2>
        Capital: {filteredCountries[0].capital}<br></br>
        Population: {filteredCountries[0].population}
        <h2>Spoken Languages</h2>
        <ol>
            {filteredCountries[0].languages.map((language) => (
                <li>{language.name}</li>
            ))}
        </ol>
        <img src={filteredCountries[0].flag} alt="Flag" height="150" width="150" />
        <h2>Weather in {filteredCountries[0].capital}</h2>
        <Weather capital={capital} />
        </div>
    )
    

}

export default Display