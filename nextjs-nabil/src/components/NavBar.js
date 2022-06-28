import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../../styles/navbar.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";

const NavBar = () => {
  const loggedout = () => {
    localStorage.removeItem("loggedin");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            <Image
              className={styles.image}
              src="/icon.svg"
              height={30}
              width={30}
            ></Image>
            <Typography
              className={styles.typography}
              component="div"
              sx={{
                ml: 2,
                flexGrow:1,
                textAlign: "start",
                mr: 10,
                fontSize: { xs: "small", md: "large" },
              }}
            >
              Header
            </Typography>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                mr: 3,
                textAlign: "end",
                display: { xs: "none", md: "initial" },
                fontSize: { xs: "small", md: "medium" },
              }}
            >
              Home
            </Typography>
            <Typography
              component="div"
              sx={{
                mr: 3,
                textAlign: "end",
                display: { xs: "none", md: "initial" },
                fontSize: { xs: "small", md: "medium" },
              }}
            >
              About
            </Typography>
            <Typography
              component="div"
              sx={{
                mr: 3,
                textAlign: "end",
                display: { xs: "none", md: "initial" },
                fontSize: { xs: "small", md: "medium" },
              }}
            >
              News
            </Typography>
            <Button
              className={styles.button}
              variant="contained"
              href="/"
              onClick={loggedout}
            sx={{alignItems:"self-end"}}>
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
