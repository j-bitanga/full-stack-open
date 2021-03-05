import React, {useState, useEffect} from 'react'
import Note from './Note'
import noteService from '../services/notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState()
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
      noteService
        .getAll()
        .then(initialNotes => {
          console.log('Initial notes is: ', initialNotes)
          setNotes(initialNotes)
        })
    }, [])


    const toggleImportanceOf = (id) => {
      const note = notes.find(n => n.id === id) // find method is used to find the note we want to modifyy then assign it to to the note variable
      const changedNote = {...note, important: !note.important} //creating new object that is an exact copy of the old note aside from the important property
      console.log(`importance of ${id} needs to be toggled`)

      noteService
      .update(id, changedNote)
      .then(returnedNote => {
        console.log('update returnedNote is: ', returnedNote)
        setNotes(notes.map(note => note.id !== id ? note : returnedNote)) // sets state to new array that contains the previous array of notes, but with the updated note
      })
      .catch(error => {
        alert(
          `the note ${note.content} was already deleted from the server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
    }

    const addNote = (event) => {
      event.preventDefault()
      const noteObject ={
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() > 0.5,
      }
      noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
        console.log('create returnedNote is: ', returnedNote)
    })

  }

    const notesToShow = showAll ? notes : notes.filter(note => note.important)
    
     const handleNoteChange = (event) => {
        console.log('Handle note change is: ', event.target.value)
        setNewNote(event.target.value)
    }
  
    return (
    <div>
      <h1>Notes</h1>
      <div>
          <button onClick={() => setShowAll(!showAll)}>
              show {showAll ? 'important' : 'all'}
          </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input 
          value={newNote}
          onChange={handleNoteChange} 
          />
          <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App