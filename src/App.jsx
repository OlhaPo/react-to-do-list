import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import Typography from "@mui/material/Typography";

function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (tasks === null) return;
    saveTasksToLocalStorage(tasks);
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

  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function editTask(index, newName) {
    const newTasks = [...tasks];
    newTasks[index].name = newName;
    setTasks(newTasks);
  }

  const numberDone = tasks?.filter((t) => t.done).length;
  const numberTotal = tasks?.length;

  let message;

  if (numberDone === 0) {
    message = "💪 One done is better than zero";
  } else if (numberDone === numberTotal) {
    message = "🚀 You are rocking!";
  } else {
    message = "👏 Keep going. You are doing great!";
  }

  return (
    <div className="App">
      <>
        <Typography variant="h4" gutterBottom>
          {numberDone} out of {numberTotal} done
        </Typography>
        <Typography variant="h5" gutterBottom>
          {message}
        </Typography>
        <TaskForm onAdd={addTask} />
        {tasks?.map((task, i) => (
          <Task
            // {...task}
            name={task.name}
            done={task.done}
            key={`${task.name}-${i}`}
            onToggle={(done) => updateTaskDone(i, done)}
            onDelete={() => removeTask(i)}
            onEdit={(name) => editTask(i, name)}
          />
        ))}
      </>
    </div>
  );
}

export default App;

function saveTasksToLocalStorage(data) {
  localStorage.setItem("tasks", JSON.stringify(data));
}
