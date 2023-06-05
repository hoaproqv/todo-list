import "./App.css";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import AddItem from "./component/AddItem";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "task_1",
      nameTask: "Learn JS",
      status: false,
    },
    {
      id: "task_2",
      nameTask: "Learn React",
      status: false,
    },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);

  const removeTask = (taskID) => {
    const liRemove = document.getElementById(taskID)
    liRemove.setAttribute('class', 'fall')
    setTimeout(()=>{setTasks(tasks.filter((task) => task.id !== taskID))}, 500)
  };

  const setTaskStatus = (taskID, value) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskID) {
          return { ...task, status: value };
        }
        return task;
      }),
    );
  };
  return (
    <div className="container">
      <Header />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setShowIncomplete={setShowIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
      <AddItem tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
