import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBarDesktop = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "start" }}
          >
            Header for Desktop
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "end" }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "end" }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "end" }}
          >
            News
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "end" }}
          >
            Listen
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarDesktop;
