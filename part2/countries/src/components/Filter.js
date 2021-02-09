import React, {useEffect, useState} from 'react'
import Display from './Display'
import axios from 'axios'

const Filter = (props) => {
    var filteredCountries = props.countries

    if(props.filter){
        filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(props.filter.toLowerCase()))
    }

    const display = () => {
        return filteredCountries.map(country =>
            <>
            <li key={country.name}>
                {country.name}
                <button onClick={props.buttonClick} country={country.name}>show</button>
            </li>
            </>
            
            )
    }

    if(filteredCountries.length > 10 || filteredCountries.length === 0) {
        return (
            <p> Too many matches, please be more specific </p>
        )
    }

    if(filteredCountries.length === 1) {
        return (
            <Display filteredCountries={filteredCountries}></Display>
        )
    }

    return (
        <ul>
            {display()}
        </ul>
    )
}

export default Filter