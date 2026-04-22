import React from "react";
import AppBar from "@mui/material/AppBar";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/system";
import { Toolbar } from "@mui/material";
import P from "../Images/Icon.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";

const NavButton = styled(Button)({
  color: "white",
  textTransform: "none",
  fontSize: "15px",
  fontWeight: 500,
  padding: "6px 14px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(83, 179, 116, 0.15)",
    color: "#53b374",
  },
  transition: "all 0.2s",
});

export default function PrimaryAppBar(props) {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar
        sx={{
          position: "fixed",
          width: "100%",
          margin: "auto",
          background: "transparent",
          backdropFilter: "blur(20px)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "space-between",
            paddingX: { xs: "12px", md: "40px" },
          }}
        >
          <Button onClick={() => navigate("/")}>
            <img src={P} alt="Pranav Kalra" loading="lazy" width={80} />
          </Button>

          {!props.isMobile && (
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <NavButton
                startIcon={<DevicesIcon />}
                onClick={props.executeScrollToProject}
              >
                Projects
              </NavButton>
              <NavButton
                startIcon={<PersonIcon />}
                onClick={props.executeScrollToContact}
              >
                Contact
              </NavButton>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/pranav00100"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#53b374",
                  borderColor: "#53b374",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  ml: 1,
                  "&:hover": {
                    backgroundColor: "#53b374",
                    color: "#000",
                    borderColor: "#53b374",
                  },
                  transition: "all 0.2s",
                }}
              >
                LinkedIn
              </Button>
            </div>
          )}

          {props.isMobile && <Dropdown />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
