import {
  useState,
  createContext,
  useContext,
  useEffect,
  Children,
} from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

export const LoginContext = createContext();

const LoginProvider = (props) => {
  const { children } = props;
  const [isAuthenticated, setisAuthenticated] = useState("false");
  const [alertFailLogin, setalertFailLogin] = useState(false);
  const router = useRouter();
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

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

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        fetchFromLocalStorage,
        signIn,
        alertFailLogin,
        // isTabletOrMobile,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
