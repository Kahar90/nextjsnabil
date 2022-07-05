import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";

export const LoginContext = createContext();

const LoginProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState("false");
  const [alertFailLogin, setalertFailLogin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchFromLocalStorage();
  }, []);

  const fetchFromLocalStorage = () => {
    // restore if user has logged in before
    let temp = localStorage.getItem("loggedin");
    setisAuthenticated(temp);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("loggedin", "true");
  };

  const signIn = (data) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.message === "login success") {
          console.log(isAuthenticated);
          setisAuthenticated("true");
          saveToLocalStorage();
          router.replace("/homepage");
        } else {
          setalertFailLogin(true);
        }
      });
    });
  };

  const loggedout = () => {
    localStorage.removeItem("loggedin");
    setisAuthenticated("false");
  };

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        alertFailLogin,
        signIn,
        loggedout,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;