import React, { useState } from "react";
import { Box } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";

export default function TaskForm({ onAdd }) {
  const [taskValue, setTaskValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(taskValue);
    setTaskValue("");
  }

  const boxStyle = {
    display: "flex",
  };

  return (
    <Box component="form" sx={boxStyle} onSubmit={handleSubmit}>
      <AddBoxIcon sx={{ fontSize: "35px" }} />
      <TextField
        type="text"
        value={taskValue}
        onChange={(event) => setTaskValue(event.target.value)}
        color="success"
        placeholder="Type your next task..."
      />
    </Box>
  );
}
