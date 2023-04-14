import React from "react";
import { useState } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <div className="App">
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task {...task} key={`${task.name}-${i}`} />
      ))}
    </div>
  );
}

export default App;
