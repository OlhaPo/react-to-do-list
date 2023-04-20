import React from "react";
import { Box, Typography } from "@mui/material";

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
    color: "#000000",
    textAlign: "right",
    "@media (max-width:576px)": {
      fontSize: "15px",
      lineHeight: 1.75,
      textAlign: "left",
    },
  };

  return (
    <Box
      className="MotivationalMessage"
      sx={{
        "@media (max-width:576px)": {
          mt: 2,
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "21px",
          color: "#000000",
          textAlign: "right",
          "@media (max-width:576px)": {
            fontSize: "15px",
            lineHeight: 1.75,
            textAlign: "left",
          },
        }}
      >
        {numberDone} out of {numberTotal} done
      </Typography>
      <Typography variant="subtitle1" sx={typographyStyle}>
        {message}
      </Typography>

      {/* <Typography variant="subtitle1" sx={typographyStyle}></Typography> */}
    </Box>
  );
}
