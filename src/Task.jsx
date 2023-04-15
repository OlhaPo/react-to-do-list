import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "./Checkbox";
// import ListSubheader from "@mui/material/ListSubheader";

export default function Task({ name, done, onToggle }) {
  return (
    // <List mt={3} subheader={<ListSubheader>Already done</ListSubheader>}>
    <List
      sx={{
        textDecorationLine: done ? "line-through" : "none",
        opacity: done ? "0.5" : "1",
      }}
    >
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={done} onClick={() => onToggle(!done)} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </List>
  );
}
