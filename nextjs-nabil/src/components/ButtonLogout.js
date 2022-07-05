import React, { useContext } from "react";
import styles from "../../styles/buttonlogout.module.scss";
import { LoginContext } from "../LoginContext";

const ButtonLogout = () => {
    const {loggedout} = useContext(LoginContext)
  return (
     <button className={styles.button} onClick={loggedout}>Log Out</button>
    
  );
};
export default ButtonLogout;
