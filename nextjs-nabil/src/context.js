import {
  useState,
  createContext,
  useContext,
  useEffect,
  Children,
} from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

export const AppContext = createContext();

const AppProvider = (props) => {
  const { children } = props;
  const [isAuthenticated, setisAuthenticated] = useState("false");
  const [alertFailLogin, setalertFailLogin] = useState(false);
  const [dataTeams, setDataTeams] = useState([]);
  const [dataGames, setDataGames] = useState([]);
  const [dataPlayers, setDataPlayers] = useState([]);
  const [moreData, setmoreData] = useState([]);
  const [valueBottomNavbar, setvalueBottomNavbar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchFromLocalStorage();
    fetchDataJsonGames();
    fetchDataJsonTeams();
    fetchDataJsonPlayers();
  }, []);

  const fetchFromLocalStorage = () => {
    // restore if user has logged in before
    let temp = localStorage.getItem("loggedin");
    setisAuthenticated(temp);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("loggedin", "true");
  };

  const fetchDataJsonGames = () => {
    // create a fetch from https://www.balldontlie.io/api/v1/games
    setIsLoading(true);
    fetch("https://www.balldontlie.io/api/v1/games")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataGames(data.data);
        setIsLoading(false);
      });
  };

  const fetchDataJsonTeams = () => {
    setIsLoading(true);
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataTeams(data.data);
        setIsLoading(false);
      });
  };

  const fetchDataJsonPlayers = () => {
    setIsLoading(true);
    fetch("https://www.balldontlie.io/api/v1/players")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataPlayers(data.data);
        setIsLoading(false);
      });
  };

  const getMoreInfoGames = (index) => {
    setIsLoadingMore(true);
    fetch("https://www.balldontlie.io/api/v1/games/" + dataTeams[index]?.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmoreData(data);
        setIsLoadingMore(false);
      });
  };

  const signIn = (data) => {
    setIsLoading(true);

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
          setIsLoading(false);
        }
      });
    });
  };

  const loggedout = () => {
    localStorage.removeItem("loggedin");
    setisAuthenticated("false");
    router.replace("/");
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        fetchFromLocalStorage,
        signIn,
        alertFailLogin,
        dataTeams,
        dataGames,
        moreData,
        dataPlayers,
        valueBottomNavbar,
        setvalueBottomNavbar,
        getMoreInfoGames,
        isLoading,
        isLoadingMore,
        loggedout,
        // isTabletOrMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
