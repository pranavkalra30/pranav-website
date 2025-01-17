import React from "react";
import AppBar from "@mui/material/AppBar";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import { styled } from "@mui/system";
import { Toolbar, Typography } from "@mui/material";
//import P from "../Animations/P.gif";
import P from "../Images/Icon.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  color: "white",
});

export default function PrimaryAppBar(props) {
  const navigate = useNavigate();
  //const { executeScrollToProject } = this.props;
  return (
    <div>
      <AppBar
        sx={{
          position: "fixed",
          width: "100%",
          margin: "auto",
        }}
      >
        <Toolbar
          //value={appPageValue}
          sx={{
            position: "fixed",
            width: "100%",
            backdropFilter: "blur(20px)",
            backgroundColor: "transparent",
            justifyContent: "space-evenly",
          }}
          showLabels
        >
          <Button onClick={() => navigate("/")}>
            {" "}
            <img src={P} alt="loading..." loading="lazy" width={100} />
          </Button>
          {/*
          <StyledBottomNavigationAction
            showLabel
            label={
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                }}
              >
                {" "}
                Projects
              </Typography>
            }
            icon={
              <DevicesIcon
                sx={{
                  color: "white",
                  fontSize: "2.5em",
                }}
              />
            }
            onChange={(event) => {
              props.executeScrollToProject();
            }}
          />

          <StyledBottomNavigationAction
            label={
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                }}
              >
                {" "}
                Experience
              </Typography>
            }
            showLabel
            icon={
              <ScienceIcon
                sx={{
                  color: "white",
                  fontSize: "2.5em",
                }}
              />
            }
            onChange={(event) => {
              // handlePage(0);
            }}
          ></StyledBottomNavigationAction>

     
        
          <StyledBottomNavigationAction
            showLabel
            onChange={(event) => {
              props.executeScrollToContact();
            }}
            label={
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                }}
              >
                {" "}
                Contact
              </Typography>
            }
            icon={
              <PersonIcon
                sx={{
                  color: "white",
                  fontSize: "2.5em",
                }}
              />
            }
          />

          */}

          <Dropdown />
        </Toolbar>
      </AppBar>
    </div>
  );
}
