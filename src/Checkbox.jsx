import React from "react";
import { Box } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Checkbox = ({ checked = false, onClick }) => {
  const iconstyle = {
    fontSize: "30px",
    color: "#468966",
  };
  return (
    <Box onClick={onClick} sx={{ display: "flex" }}>
      {!checked && <CheckBoxOutlineBlankIcon sx={iconstyle} />}
      {checked && <CheckBoxIcon sx={iconstyle} />}
    </Box>
  );
};

export default Checkbox;
