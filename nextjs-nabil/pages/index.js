import { LoginContext } from "../src/context";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Box } from "@mui/system";
import Logincard from "../src/components/logincard";

export default function Home() {
  const { isAuthenticated } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === "true") {
      router.replace("/homepage");
    } else {
      router.replace("/");
    }
  }, [isAuthenticated]);

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
