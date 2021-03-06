import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { LoginContext } from "../src/context";
import ViewHomepage from "../src/views/ViewHomepage";

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
      <ViewHomepage />
    </div>
  );
}
