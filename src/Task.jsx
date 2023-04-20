import React, { useState } from "react";
import { ListItemText, Button, Box, TextField } from "@mui/material";
import Checkbox from "./Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Task({ name, done, onToggle, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (editName.length === 0) {
      setHasError(true);
      return;
    }

    onEdit(editName);
    setEditName("");
    setIsEdit(false);
  }

  function startEditing() {
    if (done) {
      return;
    }
    setIsEdit(true);
    setEditName(name);
  }

  return (
    <Box
      sx={{
        paddingTop: 0,
        paddingBottom: "0",
        display: "flex",
        alignItems: "center",
        textDecorationLine: done ? "line-through" : "none",
        borderBottom: "1px solid #D9D8DC",
      }}
    >
      <Button
        sx={{
          minWidth: "initial",
          pl: 0,
          ml: 0,
          pr: "16px",
          opacity: done ? "0.5" : "1",
        }}
      >
        <Checkbox checked={done} onClick={() => onToggle(!done)} />
      </Button>
      {isEdit ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ flexGrow: 1, display: "flex" }}
        >
          <TextField
            id="edit-name"
            error={hasError}
            variant="standard"
            fullWidth
            value={editName}
            helperText={hasError ? "Enter value" : ""}
            onChange={(event) => setEditName(event.target.value)}
          />
        </Box>
      ) : (
        <ListItemText
          primary={name}
          onClick={startEditing}
          sx={{
            opacity: done ? "0.5" : "1",
          }}
        />
      )}

      <Button
        onClick={onDelete}
        sx={{ minWidth: "initial", px: 0, opacity: done ? "0.5" : "1" }}
      >
        <DeleteIcon
          sx={{
            fontSize: "20px",
            color: "#468966",
          }}
        />
      </Button>
    </Box>
  );
}
