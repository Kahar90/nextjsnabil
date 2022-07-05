import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../../styles/navbar.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonLogout from "./ButtonLogout";

const Navbar = () => {
  const router = useRouter();
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
                flexGrow: 1,
                textAlign: "start",
                mr: 10,
                fontSize: { xs: "small", md: "large" },
              }}
            >
              Header
            </Typography>
            <Typography
              onClick={() => {
                router.push("/homepage");
              }}
              component="div"
              sx={{
                flexGrow: 1,
                mr: 3,
                textAlign: "end",
                display: { xs: "none", md: "initial" },
                fontSize: { xs: "small", md: "medium" },
              }}
            >
              Games
            </Typography>
            <Typography
              onClick={() => {
                router.push("/teams");
              }}
              component="div"
              sx={{
                mr: 3,
                textAlign: "end",
                display: { xs: "none", md: "initial" },
                fontSize: { xs: "small", md: "medium" },
              }}
            >
              Teams
            </Typography>
            <Typography
              onClick={() => {
                router.push("/players");
              }}
              component="div"
              sx={{
                mr: 3,
                textAlign: "end",
                display: { xs: "none", md: "initial" },
                fontSize: { xs: "small", md: "medium" },
              }}
            >
              Players
            </Typography>
            {/* <Button
              className={styles.button}
              variant="contained"
              href="/"
              onClick={loggedout}
              sx={{ alignItems: "self-end" }}
            >
              Log out
            </Button> */}

            <ButtonLogout></ButtonLogout>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
