import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Slide from "@mui/material/Slide";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 600,
  });

  return (
    <Slide in={trigger} direction="up">
      <Box
        onClick={props.scrollToTop}
        role="presentation"
        sx={{ position: "fixed", bottom: 25, right: 25 }}
      >
        {children}
      </Box>
    </Slide>
  );
}

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Toolbar id="back-to-top-anchor" />
      <Container></Container>
      <ScrollTop {...props}>
        <Fab aria-label="scroll back to top" variant="extended">
          <KeyboardArrowUpIcon sx={{ mr: 1 }} />
          <Typography sx={{ textTransform: "none" }}>
            Back to the top
          </Typography>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
