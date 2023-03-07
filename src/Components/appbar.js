import React from "react";
import AppBar from "@mui/material/AppBar";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import { styled } from "@mui/system";
import ContactMeSpeedDial from "./ContactMeSpeedDial";
import { Toolbar, Typography } from "@mui/material";

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  color: "white",
});

class PrimaryAppBar extends React.Component {
  render() {
    const { handlePage, appPageValue } = this.props;

    return (
      <div>
        <AppBar sx={{
            position: "fixed",
            width: "100%",
            backdropFilter: "blur(20px)",
            backgroundColor: "transparent",
          }}>
        <Toolbar
          value={appPageValue}
          sx={{
            position: "fixed",
            width: "100%",
            backdropFilter: "blur(20px)",
            backgroundColor: "transparent",
          }}
      
          showLabels
        >
          <StyledBottomNavigationAction
            label="Experience"
            icon={<ScienceIcon />}
            onChange={(event) => {
              handlePage(0);
            }}
          >
            <Typography>Experience</Typography>
            </StyledBottomNavigationAction>

          <StyledBottomNavigationAction
            label="Projects"
            icon={<DevicesIcon />}
            onChange={(event) => {
              handlePage(1);
            }}
          />
          <StyledBottomNavigationAction
            label="About Me"
            icon={<PersonIcon />}
            onChange={(event) => {
              handlePage(0);
            }}
          />
          <StyledBottomNavigationAction
            label="Education"
            icon={<SchoolIcon />}
            onChange={(event) => {
              handlePage(3);
            }}
          />
        </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PrimaryAppBar;
