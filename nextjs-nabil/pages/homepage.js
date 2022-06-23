import { useState, createContext, useContext, useEffect } from "react";
import { LoginContext } from "../src/context";
import { useRouter } from "next/router";
import TableHome from "../src/components/table";


export default function homepage() {
  // if user is loggedin, go straight to homepage. Else go to login page
  const { isAuthenticated, authlogic } = useContext(LoginContext);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("loggedin")) {
      router.replace("/");
    } else {
      authlogic(true);
      router.replace("/homepage")
    }
  }, [router.events]);

  return (
    <TableHome></TableHome>
  );
}
