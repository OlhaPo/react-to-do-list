import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "./Checkbox";
// import ListSubheader from "@mui/material/ListSubheader";

export default function Task({ name, done }) {
  return (
    // <List mt={3} subheader={<ListSubheader>Already done</ListSubheader>}>
    <List>
      <ListItem>
        <ListItemIcon>
          <Checkbox defaultChecked={done} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </List>
  );
}
