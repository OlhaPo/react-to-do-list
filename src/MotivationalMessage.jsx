import React from "react";
import Typography from "@mui/material/Typography";

export default function MotivationalMessage({ numberDone, numberTotal }) {
  let message;

  if (numberDone === 0) {
    message = "💪 One done is better than zero";
  } else if (numberDone === numberTotal) {
    message = "🚀 You are rocking!";
  } else {
    message = "👏 Keep going. You are doing great!";
  }

  const typographyStyle = {
    fontSize: "21px",
    textAlign: "center",
  };
  return (
    <div className="MotivationalMessage">
      <Typography variant="subtitle1" sx={typographyStyle}>
        {numberDone} out of {numberTotal} done
      </Typography>

      <Typography variant="subtitle1" sx={typographyStyle}>
        {message}
      </Typography>
    </div>
  );
}
