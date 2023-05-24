import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ data, itemDelete, itemToggle }) {
  return (
    <div className={styles.todoListContainer}>
      {data.map((item) => (
        <Todo
          key={item.id}
          item={item}
          itemDelete={itemDelete}
          itemToggle={itemToggle}
        />
      ))}
    </div>
  )
}

export default TodoList
