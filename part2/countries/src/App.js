import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [filterName, setFilterName] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promised fulfilled')
        setCountries(response.data)
      })
    }

  useEffect(hook, [])

  const filteredNames = countries.filter(
    country =>
    country.name.toLocaleLowerCase().includes(filterName)
  )

  const namesToFilter = filterName ? filteredNames : countries

  console.log(countries)

  return (
    <div>
    <h2>Search Countries</h2>
    <form />
    <div>
      <input 
        value={filterName}
        onChange={e => setFilterName(e.target.value.toLocaleLowerCase())} 
        />
        <hr />
        {!filteredNames.length && (
          <div>No name matches that criteria</div>
        )}

        {filteredNames.length > 10 && filterName.length !== 0 && (
          <div>Too many matches</div>
        )}

        {filteredNames.length === 1 &&
        (namesToFilter.map(country => (
          <div key={country.name}>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h1>Languages</h1>
            <ol>
              {country.languages.map((language) => (
                <li>{language.name}</li>
              ))}
            </ol>
            <img src={country.flag} alt="Flag" height="150" width="150" />
            </div>
        )))}

        {filterName.length !== 0 && filteredNames.length !== 1 &&
        (namesToFilter.map(country => (
          <div key={country.name}>
            <p>{country.name}</p>
            </div>
        )))}
    </div>
    </div>
  )
}

export default App