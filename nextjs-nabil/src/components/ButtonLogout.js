import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../../styles/buttonlogout.module.scss";
import { AppContext } from "../context";

const ButtonLogout = () => {
    const {loggedout} = useContext(AppContext)
  return (
     <button className={styles.button} onClick={loggedout}>Log Out</button>
    
  );
};
export default ButtonLogout;
