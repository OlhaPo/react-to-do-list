import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";

export default function TaskForm() {
  const [taskValue, setTaskValue] = useState("");
  return (
    <div className="TaskForm">
      <ToggleButton value="add">
        <AddIcon />
      </ToggleButton>
      <TextField
        type="text"
        value={taskValue}
        onChange={(event) => setTaskValue(event.target.value)}
        color="success"
        placeholder="Type your next task..."
      />
    </div>
  );
}
