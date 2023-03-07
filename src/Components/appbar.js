import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import { styled } from "@mui/system";
import ContactMeSpeedDial from "./ContactMeSpeedDial";

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  color: "white",
});

class PrimaryAppBar extends React.Component {
  render() {
    const { handlePage, appPageValue } = this.props;

    return (
      <div>
        <BottomNavigation
          value={appPageValue}
          sx={{
            position: "fixed",
            width: "100%",
            backdropFilter: "blur(20px)",
            backgroundColor: "transparent",
          }}
          paper={{}}
          onChange={(event, newValue) => {
            console.log(newValue);
            handlePage(newValue);
          }}
          showLabels
        >
          <StyledBottomNavigationAction
            label="Experience"
            icon={<ScienceIcon />}
          />

          <StyledBottomNavigationAction
            label="Projects"
            icon={<DevicesIcon />}
          />
          <StyledBottomNavigationAction
            label="About Me"
            icon={<PersonIcon />}
          />
          <StyledBottomNavigationAction
            label="Education"
            icon={<SchoolIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default PrimaryAppBar;
