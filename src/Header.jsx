import React from "react";
import { Box, Typography } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";

export default function Header() {
  const headerStyle = {
    padding: "30px 30px",
    background: "#d2ebcd",
    borderBottom: "3px solid #468966",
    color: "#468966",
    display: "flex",
    justifyContent: "start",
    alignItems: "stretch",
    columnGap: "15px",
    marginBottom: "60px",
  };

  return (
    <Box className="Header" sx={headerStyle}>
      <ChecklistIcon
        color="red"
        style={{ color: "#468966", fontSize: "40px" }}
      />
      <Typography variant="h4">TO-DO List</Typography>
    </Box>
  );
}
