import Mobilescreenhomepage from "../src/views/Mobilescreenhomepage";
import Desktopscreenhomepage from "../src/views/Desktopscreenhomepage";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { LoginContext } from "../src/context";

export default function homepage() {
  const { isTabletOrMobile, isAuthenticated } = useContext(LoginContext);
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
      {isTabletOrMobile ? <Mobilescreenhomepage /> : <Desktopscreenhomepage />}
    </div>
  );
}
