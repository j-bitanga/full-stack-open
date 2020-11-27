import React from 'react'

const Add = (props) => {
    const persons = props.persons
    const setPersons = props.setPersons
    const newName = props.newName
    const setNewName = props.setNewName
    const newNumber = props.newNumber
    const setNewNumber = props.setNewNumber

const addName = (event) => { {/*addName checks if a name already exists in the persons state */}
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

  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
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
  </div>

  )

}
  

export default Add