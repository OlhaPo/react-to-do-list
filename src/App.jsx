import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { Typography, Button } from "@mui/material";

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

  const numberDone = completedTasks?.length;
  const numberTotal = completedTasks?.length + uncompletedTasks?.length;

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
        {/* <MotivationalMessage
          numberDone={completedTasks.length}
          numberTotal={completedTasks.length + uncompletedTasks.length}
        /> */}
        <Typography variant="h5" gutterBottom>
          {message}
        </Typography>

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
      </>
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
