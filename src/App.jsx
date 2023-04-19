import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { Box, Container, Typography } from "@mui/material/";

const LOCALSTORAGE_KEY = "todos";

const columnHeaderStyle = {
  height: "80px",
};

function App() {
  const [uncompletedTasks, setUncompletedTasks] = useState(null);
  const [completedTasks, setCompletedTasks] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);

  const containerStyle = {
    display: "flex",
  };

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
      <Header
        uncompletedTasks={uncompletedTasks}
        completedTasks={completedTasks}
      />
      <Container sx={containerStyle}>
        {/* Left column */}
        <Box sx={{ pr: 3, width: "50%", borderRight: "1px solid grey" }}>
          <Box sx={columnHeaderStyle}>
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
        </Box>
        {/* End left column */}

        {/* Right column */}
        <Box sx={{ pl: 3, width: "50%" }}>
          <Box sx={columnHeaderStyle}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "21px" }}
              pb={2}
              pt={2}
            >
              {" "}
              Completed
            </Typography>
          </Box>

          {showCompleted &&
            completedTasks?.map((task, i) => (
              <Task
                name={task.name}
                done={task.done}
                key={`${task.name}-${i}`}
                onToggle={(newValue) => {
                  task.done = newValue;
                  setCompletedTasks(removeTaskFromList(completedTasks, i));
                  setUncompletedTasks(
                    insertTaskIntoList(uncompletedTasks, task)
                  );
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
        </Box>
        {/* End right column */}
      </Container>
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
