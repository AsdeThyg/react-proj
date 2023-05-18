import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ index, item, itemDelete }) {
  return (
    <div className={styles.todo} onDoubleClick={() => itemDelete(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{item}</div>
    </div>
  )
}

export default Todo
