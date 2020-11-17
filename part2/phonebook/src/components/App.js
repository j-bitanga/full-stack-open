import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [showName, setShowName] = useState(persons)

  const addName = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      const personObject = {
          name: newName,
          number: newNumber
      }

      var isDupe = function(person) {
        return person.name === personObject.name
      }

      var dupes = persons.filter(isDupe)

      if (persons.some(isDupe) === true) {
        window.alert(personObject.name + '  already exists!')
      }
      else {
        setPersons(persons.concat(personObject))
      }
      console.log('dupes is ', dupes)
      console.log('find is', persons.some(isDupe))
      setNewName('')
      setNewNumber('')
  }

  const searchName = (event) => {
    event.preventDefault()
    console.log('search clicked', event.target)

  }

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameSearch = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={searchName}/>
      <div></div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                    value={newName}
                    onChange={handleNameChange}
                         />
        </div>
        <div>
        number: <input 
                    value={newNumber}
                   onChange={handleNumberChange}
                         />
        </div>
        <div>
          <button type="submit">add</button>
          {console.log(persons)}
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map((person) =>
            <Person key={person.name} person={person} />
            )}
      </ul>
    </div>
  )
}

export default App