import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;

const links = [
  {
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/pranav00100",
  },
  {
    label: "GitHub",
    icon: <GitHubIcon />,
    url: "https://github.com/pranavkalra30",
  },
  {
    label: "Send an Email",
    icon: <MailIcon />,
    url: "mailto:pranavkalra30@icloud.com",
  },
];

export default function MobileDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon sx={{ color: "grey", fontSize: "2em" }} />
      </IconButton>

      <Drawer
        disableScrollLock
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "transparent",
            backdropFilter: "blur(20px)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.08)",
          },
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {links.map(({ label, icon, url }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                onClick={() =>
                  window.open(url, "_blank", "noopener,noreferrer")
                }
              >
                <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                <ListItemText primary={label} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
