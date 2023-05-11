/* eslint-disable react/prop-types */
import styles from './TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="button" onClick={() => delTodo(itemProp.id)}>
        Delete
      </button>
      {itemProp.title}
    </div>
  </li>
);
export default TodoItem;
