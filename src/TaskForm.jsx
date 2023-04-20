import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Button type="submit" sx={{ pl: 0, ml: 0, minWidth: "initial" }}>
        <AddBoxIcon sx={{ fontSize: "35px", color: "#468966" }} />
      </Button>
      <TextField
        autoFocus
        sx={{ flexGrow: 1 }}
        type="text"
        value={taskValue}
        onChange={(event) => setTaskValue(event.target.value)}
        color="success"
        placeholder={hasError ? "Type something 😉" : "Type your next task..."}
      />
    </Box>
  );
}
