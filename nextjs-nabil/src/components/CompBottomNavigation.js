// import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CompBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box
        sx={{
          width: 500,
          display: { xs: "initial", md: "none" },
          position: "",
          textAlign: "center",
          bottom: "0%",
          width: "100%",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Games" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Teams" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Players" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
};
export default CompBottomNavigation;
