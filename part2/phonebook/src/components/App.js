import React, { useState } from 'react'
import Person from './Person'
import Search from './Search'
import Add from './Add'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  return (
    <div>
      <Search filterName={filterName} setFilterName={setFilterName} persons={persons} />
      <Add persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
    </div>
  )
}

export default App