import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "./Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
// import ListSubheader from "@mui/material/ListSubheader";

export default function Task({ name, done, onToggle, onDelete }) {
  return (
    // <List mt={3} subheader={<ListSubheader>Already done</ListSubheader>}>
    <List
      sx={{
        textDecorationLine: done ? "line-through" : "none",
        opacity: done ? "0.5" : "1",
      }}
    >
      <ListItem sx={{ width: "58%" }}>
        <ListItemIcon>
          <Checkbox checked={done} onClick={() => onToggle(!done)} />
        </ListItemIcon>
        <ListItemText primary={name} />
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </ListItem>
    </List>
  );
}
