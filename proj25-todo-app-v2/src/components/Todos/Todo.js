import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ item, itemDelete, itemToggle }) {
  return (
    <div
      className={`${styles.todo} ${
        item.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{item.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => itemDelete(item.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => itemToggle(item.id)}
      />
    </div>
  )
}

export default Todo
