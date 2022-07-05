import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ViewTeams from "../src/views/ViewTeams";
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
      <ViewTeams />
    </div>
  );
}
