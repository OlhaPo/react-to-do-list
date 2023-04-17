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

  return (
    <div className="MotivationalMessage">
      <Typography variant="h4" gutterBottom>
        {numberDone} out of {numberTotal} done
      </Typography>

      <Typography variant="h5" gutterBottom>
        {message}
      </Typography>
    </div>
  );
}
