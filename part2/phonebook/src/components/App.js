import React, { useState, useEffect } from 'react'
import Search from './Search'
import Add from './Add'
import personService from '../services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      console.log('initialPersons is: ', initialPersons)
      setPersons(initialPersons)
    })
 }, [])

 const deleteItem = (id) => {
  personService
  .remove(id)
  .then(() => {
    setPersons(persons.filter(p => p.id !== id))
  })
  
 }

 const addItem = (personObject) => {
  personService
  .create(personObject)
  .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
  })
 }

 const updateItem = (id, personObject) => {
 const personFind = persons.find(p => p.id === id) /*find the person ID */
 const changedPerson = {...personFind, number: personObject.number} /*Create copy of object and change the specified attribute */

 console.log('Person find is: ', personFind)
 console.log('changed person is: ', changedPerson)
 console.log('current persons: ', persons)


  personService
  .update(id, changedPerson)
  .then(returnedPerson => {
    setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
    console.log('returned person is:', returnedPerson)
 })
 console.log(persons)
 }

  return (
    <div>
      <Search filterName={filterName} setFilterName={setFilterName} persons={persons} deleteItem={deleteItem}   />
      <Add persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addItem={addItem} updateItem={updateItem} />
    
    </div>
  )
}

export default App