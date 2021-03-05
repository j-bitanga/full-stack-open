import React from 'react'

const Remove = (props) => {
const person = props.person

const handleDelete = (id) => {
   console.log('id is: ', id)
   if (window.confirm(`Do you really want to delete ${person.name} ?`)) {
    props.deleteItem(id)
   }
}
return (
    <div>
        <button onClick={() => handleDelete(person.id)}>delete</button>
    </div>
)

}




export default Remove