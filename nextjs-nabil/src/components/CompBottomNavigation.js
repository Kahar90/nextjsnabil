import React, { useContext } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { useRouter } from "next/router";
import { AppContext } from "../AppContext";

const CompBottomNavigation = () => {
  const { valueBottomNavbar, setvalueBottomNavbar } = useContext(AppContext);
  const router = useRouter();
  return (
    <div>
      <Box
        sx={{
          // width: 500,
          display: { xs: "initial", md: "none" },
          position: "",
          textAlign: "center",
          bottom: "0%",
          width: "100%",
        }}
      >
        <BottomNavigation
          showLabels
          value={valueBottomNavbar}
          onChange={(event, newValue) => {
            setvalueBottomNavbar(newValue);
          }}
        >
          <BottomNavigationAction
            label="Games"
            icon={<SportsBasketballIcon />}
            onClick={() => {
              router.push("/homepage");
            }}
          />
          <BottomNavigationAction
            label="Teams"
            icon={<GroupsIcon />}
            onClick={() => {
              router.push("/teams");
            }}
          />
          <BottomNavigationAction
            label="Players"
            icon={<PersonIcon />}
            onClick={() => {
              router.push("/players");
            }}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};
export default CompBottomNavigation;
