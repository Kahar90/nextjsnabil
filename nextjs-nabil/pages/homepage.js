import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { LoginContext } from "../src/context";
import MobileViewHomepage from "../src/views/MobileViewHomepage";
import DesktopViewHomepage from "../src/views/DesktopViewHomepage";

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
      {isTabletOrMobile ? <MobileViewHomepage /> : <DesktopViewHomepage />}
    </div>
  );
}
