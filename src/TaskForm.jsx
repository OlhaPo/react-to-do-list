import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";

export default function TaskForm({ onAdd }) {
  const [taskValue, setTaskValue] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (taskValue.length === 0) {
      setHasError(true);
      return;
    }
    onAdd(taskValue);
    setTaskValue("");
    setHasError(false);
  }

  const boxStyle = {
    display: "flex",
  };

  return (
    <Box component="form" sx={boxStyle} onSubmit={handleSubmit}>
      <Button type="submit">
        <AddBoxIcon sx={{ fontSize: "35px" }} />
      </Button>
      <TextField
        type="text"
        value={taskValue}
        onChange={(event) => setTaskValue(event.target.value)}
        color="success"
        placeholder={
          hasError ? "The field can't be empty" : "Type your next task..."
        }
      />
    </Box>
  );
}
