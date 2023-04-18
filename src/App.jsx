import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import MotivationalMessage from "./MotivationalMessage";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { Button, Box } from "@mui/material/";

const LOCALSTORAGE_KEY = "todos";

function App() {
  const [uncompletedTasks, setUncompletedTasks] = useState(null);
  const [completedTasks, setCompletedTasks] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);

  function saveToLocalStorage() {
    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({
        completed: completedTasks,
        uncompleted: uncompletedTasks,
        showCompleted,
      })
    );
  }

  useEffect(() => {
    if (uncompletedTasks === null || completedTasks === null) return;
    saveToLocalStorage();
  }, [uncompletedTasks, completedTasks, showCompleted]);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    setUncompletedTasks(state?.uncompleted ?? []);
    setCompletedTasks(state?.completed ?? []);
    setShowCompleted(!!state?.showCompleted);
  }, []);

  return (
    <div className="App">
      <Header />

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TaskForm
          onAdd={(newTaskName) =>
            setUncompletedTasks(
              insertTaskIntoList(uncompletedTasks, {
                name: newTaskName,
                done: false,
              })
            )
          }
        />

        <MotivationalMessage
          numberDone={completedTasks?.length}
          numberTotal={completedTasks?.length + uncompletedTasks?.length}
        />
      </Box>

      {uncompletedTasks?.map((task, i) => (
        <Task
          name={task.name}
          done={task.done}
          key={`${task.name}-${i}`}
          onToggle={(newValue) => {
            task.done = newValue;
            setUncompletedTasks(removeTaskFromList(uncompletedTasks, i));
            setCompletedTasks(insertTaskIntoList(completedTasks, task));
          }}
          onDelete={() =>
            setUncompletedTasks(removeTaskFromList(uncompletedTasks, i))
          }
          onEdit={(newName) =>
            setUncompletedTasks(
              updateTaskInList(uncompletedTasks, i, {
                ...task,
                name: newName,
              })
            )
          }
        />
      ))}

      <Button variant="text" onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide completed" : "Show completed"}
      </Button>

      {showCompleted &&
        completedTasks?.map((task, i) => (
          <Task
            name={task.name}
            done={task.done}
            key={`${task.name}-${i}`}
            onToggle={(newValue) => {
              task.done = newValue;
              setCompletedTasks(removeTaskFromList(completedTasks, i));
              setUncompletedTasks(insertTaskIntoList(uncompletedTasks, task));
            }}
            onDelete={() =>
              setCompletedTasks(removeTaskFromList(completedTasks, i))
            }
            onEdit={(newName) => {
              task.name = newName;
              setCompletedTasks(updateTaskInList(completedTasks, i, task));
            }}
          />
        ))}
    </div>
  );
}

export default App;

function insertTaskIntoList(list, task) {
  const newList = [...list];
  newList.unshift(task);
  return newList;
}

function updateTaskInList(list, i, task) {
  const newList = [...list];
  newList[i] = task;
  return newList;
}

function removeTaskFromList(list, i) {
  const newList = [...list];
  newList.splice(i, 1);
  return newList;
}
