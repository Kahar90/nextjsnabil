import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../src/context";
import ViewTeams from "../src/views/ViewTeams";
import ViewPlayers from "../src/views/ViewPlayers";

export default function homepage() {
  const { isAuthenticated } = useContext(AppContext);
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
