import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  TextField,
} from "@mui/material";
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
    <List
      sx={{
        textDecorationLine: done ? "line-through" : "none",
        opacity: done ? "0.5" : "1",
        paddingTop: 0,
        paddingBottom: "0",
      }}
    >
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={done} onClick={() => onToggle(!done)} />
        </ListItemIcon>

        {isEdit ? (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="edit-name"
              error={hasError}
              variant="standard"
              value={editName}
              helperText={hasError ? "Enter value" : ""}
              onChange={(event) => setEditName(event.target.value)}
            />
          </Box>
        ) : (
          <ListItemText primary={name} onClick={startEditing} />
        )}

        <Button onClick={onDelete}>
          <DeleteIcon sx={{ fontSize: "25px", color: "#468966" }} />
        </Button>
      </ListItem>
    </List>
  );
}
