import {
  useState,
  createContext,
  useContext,
  useEffect,
  Children,
} from "react";
import { useRouter } from "next/router";

export const LoginContext = createContext();

const LoginProvider = (props) => {
  const { children } = props;
  const [isAuthenticated, setisAuthenticated] = useState("false");
  const [alertFailLogin, setalertFailLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchFromLocalStorage();
  }, []);

  const fetchFromLocalStorage = () => {
    // restore if user has logged in before
    let temp = localStorage.getItem("loggedin");
    console.log(temp + " value of temp inside fetchfrmlocalstorage");
    setisAuthenticated(temp);
    console.log(localStorage.getItem("loggedin") + " Value loggedin");
    console.log(
      isAuthenticated + " value isAuthenticated inside fetchfromlocalstorage"
    );

    // if user is loggedin, go straight to homepage. Else go to login page
    if (isAuthenticated === "true") {
      router.replace("/homepage");
    } else {
      router.replace("/");
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("loggedin", "true");
  };

  const Loginfunc = (data) => {
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
          setisAuthenticated(true);
          saveToLocalStorage();
          router.replace("/homepage");
        } else {
          setalertFailLogin(true);
        }
      });
    });
  };

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        fetchFromLocalStorage,
        Loginfunc,
        alertFailLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
