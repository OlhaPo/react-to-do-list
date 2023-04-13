import React from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <Task />
      <Task />
    </div>
  );
}

export default App;
