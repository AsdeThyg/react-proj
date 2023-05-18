import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

function App() {
  const [data, setData] = useState([])

  function onAddNewItem(newItem) {
    // let newArray = [...data]
    // newArray.push(newItem)
    // setData(newArray)
    setData([...data, newItem])
  }
  function onDeleteItem(index) {
    setData(data.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>TODO App</h1>
      <hr />
      <TodoForm itemAdd={onAddNewItem} />
      {data.length > 0 ? (
        <TodoList data={data} itemDelete={onDeleteItem} />
      ) : (
        <h2>TodoList is empty</h2>
      )}
    </div>
  )
}

export default App
