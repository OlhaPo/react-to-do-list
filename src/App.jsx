import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import Typography from "@mui/material/Typography";

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

  // Alternative solution
  // function updateTaskDone(taskIndex, newDone) {
  //   setTasks((prev) => {
  //     const newTasks = [...prev];
  //     newTasks[taskIndex].done = newDone;
  //     return newTasks;
  //   });
  // }

  function updateTaskDone(taskIndex, newValue) {
    const newTasks = [...tasks]; // clone the `tasks` var
    newTasks[taskIndex].done = newValue;
    setTasks(newTasks);
  }

  const numberDone = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        {numberDone} out of {numberTotal} done
      </Typography>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task
          // {...task}
          name={task.name}
          done={task.done}
          key={`${task.name}-${i}`}
          onToggle={(done) => updateTaskDone(i, done)}
        />
      ))}
    </div>
  );
}

export default App;
