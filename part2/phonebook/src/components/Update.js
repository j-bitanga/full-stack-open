
const Update = (dupes, personObject, update) => {
const duplicate = dupes[0]
const personObj = personObject
const updateItem = update
/*const updateItem = update*/

const handleUpdate = () => {
console.log('duplicate person is: ', duplicate)
console.log('personObj is: ', personObj)

if (window.confirm(`${duplicate.name} is already in the phonebook, replace the old number? ?`)) {
    updateItem(duplicate.id, personObj)
    }   

}
    return (
    handleUpdate()
)

}

export default Update