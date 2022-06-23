import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"center" }}>
            Example Header activated by context
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
