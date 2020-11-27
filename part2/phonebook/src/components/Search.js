import React from 'react'

const Search = (props) => {
   const persons = props.persons
    const filterName = props.filterName
    const setFilterName = props.setFilterName

const filteredNames = persons.filter(
    person =>
    person.name.toLocaleLowerCase().includes(filterName)
  )

  const namesToFilter = filterName ? filteredNames : persons

  return (
    <div>
    <h2>Search</h2>
    <form onSubmit={filterName}/>
    <div>
      <input 
        value={filterName}
        onChange={e => setFilterName(e.target.value.toLocaleLowerCase())}
        />
        <hr />
        {!filteredNames.length && (
          <div>No name matches that criteria</div>
        )}
        {namesToFilter.map(person => (
          <div key={person.name}>
            <p>{person.name} {person.number}</p>
            </div>
        ))}
    </div>
    </div>
  )

}

export default Search                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 