import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import ReplyIcon from "@mui/icons-material/Reply";
import Grow from "@mui/material/Grow";

export default function BackToTop(props) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  return (
    <Grow in>
      <Fab
        aria-label="scroll back to top"
        variant="extended"
        sx={{
          backgroundColor: "rgb(255 255 255 / 0.5)",
          backdropFilter: "blur(5px)",
          position: "fixed",
          top: 60,
          left: 70,
        }}
        onClick={props.handBackButtonClick}
      >
        <ReplyIcon />
      </Fab>
    </Grow>
  );
}
