import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Checkbox = ({ checked = false, onClick }) => {
  const iconstyle = {
    fontSize: "30px",
  };
  return (
    <div onClick={onClick}>
      {!checked && <CheckBoxOutlineBlankIcon sx={iconstyle} />}
      {checked && <CheckBoxIcon sx={iconstyle} />}
    </div>
  );
};

export default Checkbox;
