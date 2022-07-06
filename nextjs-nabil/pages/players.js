import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import { AppContext } from "../AppContext";
import ViewPlayers from "../src/views/ViewPlayers";
import { LoginContext } from "../src/LoginContext";

export default function homepage() {
  const { isAuthenticated } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === "true") {
      
    } else {
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      {/* <ViewTeams /> */}
      <ViewPlayers></ViewPlayers>
    </div>
  );
}
