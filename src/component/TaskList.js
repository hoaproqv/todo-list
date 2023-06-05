import React from "react";

function TaskList({ tasks, showIncomplete, setShowIncomplete, setTaskStatus, removeTask }) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? task.status !== true : true))
          .map((task) => (
            <li id={task.id} key={task.id} className={task.status ? "done" : ""} >
              <span className="label">{task.nameTask}</span>
              <div className="action">
                <input
                  type="checkbox"
                  className="btn-action btn-action-done"
                  checked={task.status}
                  onChange={e=> setTaskStatus(task.id, e.target.checked)}
                />
                <button onClick={()=>removeTask(task.id)} className="btn-action btn-action-delete">💣</button>
              </div>
            </li>
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incomplete tasks only
        </label>
        <input
          type="checkbox"
          name=""
          id="filter"
          checked={showIncomplete}
          onChange={(e) => setShowIncomplete(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
