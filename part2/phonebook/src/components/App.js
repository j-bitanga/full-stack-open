import React, { useState, useEffect } from 'react'
import Person from './Person'
import Search from './Search'
import Add from './Add'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

   {/*This gets rendered immediately after the first render */}
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  {/* useEffect specifies how often the effect is run -> empty array "[]" means it is only run along with the first render */}
  useEffect(hook, []) 

  console.log('render', persons.length, 'persons');

  return (
    <div>
      <Search filterName={filterName} setFilterName={setFilterName} persons={persons} />
      <Add persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
    </div>
  )
}

export default App