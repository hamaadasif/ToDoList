import "./styles.css"

export function TodoItem({ completed, id, title, date, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <div className="todo-checkbox">
        <input
          id={`todo-check-${id}`}
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={`todo-check-${id}`}></label>
      </div>
      <div className="todo-title">{title}</div>
      <div className="todo-date">{date}</div>
      <div className="todo-delete">
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
}