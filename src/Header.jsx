import React from "react";
import { Box, Typography } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import MotivationalMessage from "./MotivationalMessage";

export default function Header({ completedTasks, uncompletedTasks }) {
  const headerStyle = {
    padding: "10px 30px",
    background: "#d2ebcd",
    borderBottom: "3px solid #468966",
    color: "#468966",
    marginBottom: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Box className="Header" sx={headerStyle}>
      <Box
        sx={{ flexDirection: "row", alignItems: "stretch", display: "flex" }}
      >
        <ChecklistIcon
          style={{ color: "#468966", fontSize: "40px", paddingRight: "10px" }}
        />
        <Typography variant="h4">TO-DO List</Typography>
      </Box>
      <MotivationalMessage
        numberDone={completedTasks?.length}
        numberTotal={
          (completedTasks?.length ?? 0) + (uncompletedTasks?.length ?? 0)
        }
      />
    </Box>
  );
}
