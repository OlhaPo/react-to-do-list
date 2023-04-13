import React from "react";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

export default function Task() {
  return (
    <Box>
      <Checkbox inputProps={{ "aria-label": "checkbox" }} />
      <TextField id="standard-basic" variant="standard" value="get up" />
    </Box>
  );
}
