import { useState } from "react";
import "./styles.css";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit({ title: newItem, date });

    setNewItem("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          placeholder="New Item"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          id="date"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
