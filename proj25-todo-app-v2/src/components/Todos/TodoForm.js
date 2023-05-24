import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ itemAdd }) {
  const [newItem, setNewItem] = useState('')

  function onItemSubmit(event) {
    event.preventDefault()
    itemAdd(newItem)
    setNewItem('')
  }

  return (
    <form onSubmit={onItemSubmit} className={styles.myForm}>
      <input
        placeholder="Enter new Todo"
        type="text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        className={styles.myInput}
      />
      <Button type="Submit" tooltip="Submit">
        Submit
      </Button>
    </form>
  )
}

export default TodoForm
