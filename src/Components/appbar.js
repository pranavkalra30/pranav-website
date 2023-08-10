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
              label={<Typography sx={{color: appPageValue===1?'#898da3': 'white', fontSize: appPageValue===1?'16px': '13px'}}> Projects</Typography>}
              icon={<DevicesIcon sx={{color: appPageValue===1?'#898da3': 'white',  fontSize: appPageValue===1?'3em': '2.5em'}}/>}
              onChange={(event) => {
                handlePage(1);
              }}
            />
            <StyledBottomNavigationAction
              showLabel
              label={<Typography sx={{color: appPageValue===2?'#898da3': 'white', fontSize: appPageValue===2?'16px': '13px'}}> About Me</Typography>}
              icon={<PersonIcon sx={{color: appPageValue===2?'#898da3': 'white', fontSize: appPageValue===2?'3em': '2.5em' }}/>}
              onChange={(event) => {
                handlePage(2);
              }}
            />
            <StyledBottomNavigationAction
              showLabel
              label={<Typography sx={{color: appPageValue===3?'#898da3': 'white', fontSize: appPageValue===3?'16px': '13px'}}> Education</Typography>}
              icon={<SchoolIcon sx={{color: appPageValue===3?'#898da3': 'white',  fontSize: appPageValue===3?'3em': '2.5em'}}/>}
              onChange={(event) => {
                handlePage(3);
              }}
            />
              <StyledBottomNavigationAction
              label={<Typography sx={{color: appPageValue===0?'#898da3': 'white', fontSize: appPageValue===0?'16px': '13px'}}> Experience</Typography>}
              showLabel
              icon={<ScienceIcon sx={{color: appPageValue===0?'#898da3': 'white',  fontSize: appPageValue===0?'3em': '2.5em'}}/>}
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
