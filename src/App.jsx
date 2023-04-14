import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

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
