import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.modules.css'

function TodosActions({
  itemsReset,
  completedItemsDelete,
  completedItemsExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button tooltip="Reset" onClick={itemsReset}>
        <RiRefreshLine />
      </Button>
      <Button
        tooltip="Clear completed"
        onClick={completedItemsDelete}
        disabled={!completedItemsExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
