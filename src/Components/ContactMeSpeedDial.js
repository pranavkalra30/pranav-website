import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const actions = [
  { icon: <EmailIcon />, name: "Email" },
  { icon: <LinkedInIcon />, name: "Linkedin" },
  { icon: <GitHubIcon />, name: "GitHub" },
];

export default function ContactMeSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Contact"
        sx={{ position: "absolute", bottom: 100, right: 16 }}
        icon={<ContactMailIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
