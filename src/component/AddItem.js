import React, { useState } from "react";

function AddItem({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        nameTask: newTask,
        status: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  return (
    <form action="#" className="form">
      <label htmlFor="new-item"> Add to the todo list</label>
      <input
        type="text"
        id="new-item"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        autoComplete="off"
      />
      <button onClick={handleSubmit} type="submit">
        Add Item
      </button>
    </form>
  );
}

export default AddItem;
