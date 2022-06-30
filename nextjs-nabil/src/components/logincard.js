import Grid from "@mui/material/Grid";
import { AppContext } from "../context";
import { useContext, useEffect } from "react";
import { Paper } from "@mui/material";
import { Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styles from "../../styles/loginpage.module.scss";

const LoginCard = () => {
  const { signIn, alertFailLogin } = useContext(AppContext);

  return (
    <div className={styles.logincard}>
      <Grid
        container
        spacing={10}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item sx={{ textAlign: "center", margin: "auto" }}>
          <h1 className={styles.h1}>
            Hello There! <br></br>Please Log in
          </h1>
        </Grid>
        <Grid item>
          <Paper
            className={styles.paper}
            variant="outlined"
            sx={{
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0px 0px 2px 0px ",
            }}
          >
            <div>
              <h1> Login </h1>
              <br></br>

              <div>
                <form onSubmit={login}>
                  <TextField className={styles.textfield}
                    sx={{ marginTop: "10px", marginBottom: "10px" }}
                    label="ID"
                    variant="outlined"
                    id="idField"
                    required
                  />

                  <br></br>

                  <TextField className={styles.textfield}
                    sx={{ marginTop: "", marginBottom: "10px" }}
                    label="Password"
                    variant="outlined"
                    id="passwordField"
                    required
                  />
                  <br></br>

                  <Button className={styles.button} type="submit">
                    Login
                  </Button>
                </form>
              </div>
            </div>

            <br></br>
            {alertFailLogin && (
              <Alert severity="error">Invalid ID or Password</Alert>
            )}
            <p>
              login: nabil <br></br>
              password: nabil
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  function login(params) {
    event.preventDefault();
    let idField = document.getElementById("idField").value;
    let passwordField = document.getElementById("passwordField").value;
    let data = { id: idField, password: passwordField };
    signIn(data);
  }
};

export default LoginCard;
