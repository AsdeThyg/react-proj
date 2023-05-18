import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ data, itemDelete }) {
  return (
    <div className={styles.todoListContainer}>
      {data.map((item, index) => (
        <Todo key={index} index={index} item={item} itemDelete={itemDelete} />
      ))}
    </div>
  )
}

export default TodoList
