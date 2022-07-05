import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../src/context";
import ViewGames from "../src/views/ViewGames";

export default function homepage() {
  const {  isAuthenticated } = useContext(AppContext);
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
      <ViewGames></ViewGames>
    </div>
  );
}
