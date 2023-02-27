import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import DevicesIcon from "@mui/icons-material/Devices";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import ContactMeSpeedDial from "./ContactMeSpeedDial";

const PrimaryAppBar = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Experience" icon={<ScienceIcon />} />
        <BottomNavigationAction label="Projects" icon={<DevicesIcon />} />
        <BottomNavigationAction label="About Me" icon={<PersonIcon />} />
        <BottomNavigationAction label="Education" icon={<SchoolIcon />} />
      </BottomNavigation>
      <ContactMeSpeedDial />
    </div>
  );
};

export default PrimaryAppBar;
