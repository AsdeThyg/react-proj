import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [data, setData] = useState([])

  function onAddNewItem(text) {
    const newItem = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setData([...data, newItem])
  }

  function onDeleteItem(id) {
    setData(data.filter((item) => item.id !== id))
  }

  function onToggleItem(id) {
    setData(
      data.map((item) => {
        return item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item }
      })
    )
  }

  function onResetItems() {
    setData([])
  }

  function onCompletedItemsDelete() {
    setData(data.filter((item) => !item.isCompleted))
  }

  const completedItemsCount = data.filter((item) => item.isCompleted).length

  return (
    <div className="App">
      <h1>TODO App</h1>
      <hr />
      <TodoForm itemAdd={onAddNewItem} />

      {data.length > 0 && (
        <TodosActions
          itemsReset={onResetItems}
          completedItemsDelete={onCompletedItemsDelete}
          completedItemsExist={Boolean(completedItemsCount)}
        />
      )}

      {data.length > 0 ? (
        <TodoList
          data={data}
          itemDelete={onDeleteItem}
          itemToggle={onToggleItem}
        />
      ) : (
        <h2>TodoList is empty</h2>
      )}

      {completedItemsCount > 0 && (
        <h2>{`You have completed ${completedItemsCount} ${
          completedItemsCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
