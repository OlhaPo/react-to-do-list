import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Checkbox = ({ defaultChecked = false }) => {
  const [checked, setChecked] = useState(false);
  const iconstyle = {
    fontSize: "30px",
  };
  return (
    <div>
      {!checked && <CheckBoxOutlineBlankIcon sx={iconstyle} />}
      {checked && <CheckBoxIcon sx={iconstyle} />}
    </div>
  );
};

export default Checkbox;
