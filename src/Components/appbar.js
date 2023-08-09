import React from "react";
import AppBar from "@mui/material/AppBar";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import { styled } from "@mui/system";
import { Toolbar } from "@mui/material";
//import P from "../Animations/P.gif";
import P from "../Images/Icon.png";


const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  color: "white",
});

class PrimaryAppBar extends React.Component {
  render() {
    const { handlePage, appPageValue } = this.props;

    return (
      <div>
        <AppBar
          sx={{
            position: "fixed",
            width: "100%",
            backdropFilter: "blur(20px)",
            backgroundColor: "transparent",
            margin: "auto",
          }}
        >
          <Toolbar
            value={appPageValue}
            sx={{
              position: "fixed",
              width: "100%",
              backdropFilter: "blur(20px)",
              backgroundColor: "transparent",
              justifyContent: "center",
            }}
            showLabels
          >
             <img src={P} alt="loading..." loading="lazy" width={100} />
          

            <StyledBottomNavigationAction
              showLabel
              label="Projects"
              icon={<DevicesIcon />}
              onChange={(event) => {
                handlePage(1);
              }}
            />
            <StyledBottomNavigationAction
              showLabel
              label="About Me"
              icon={<PersonIcon />}
              onChange={(event) => {
                handlePage(2);
              }}
            />
            <StyledBottomNavigationAction
              showLabel
              label="Education"
              icon={<SchoolIcon />}
              onChange={(event) => {
                handlePage(3);
              }}
            />
              <StyledBottomNavigationAction
              label="Experience"
              showLabel
              icon={<ScienceIcon />}
              onChange={(event) => {
                handlePage(0);
              }}
            ></StyledBottomNavigationAction>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PrimaryAppBar;
