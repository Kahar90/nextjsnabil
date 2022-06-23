import { LoginContext } from "../src/context";
import { useRouter } from "next/router";
import { useState, createContext, useContext, useEffect } from "react";
import { Box } from "@mui/system";
import Logincard from "../src/components/logincard";

export default function Home() {
  // if user is loggedin, go straight to homepage.  Else go to login page
  const { isAuthenticated, authlogic } = useContext(LoginContext);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("loggedin")) {
      router.replace("/");
    } else {
      router.replace("/homepage");
      authlogic(true);
      
    }
  }, [router.events]);
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Logincard></Logincard>
      </Box>
    </div>
  );
}
