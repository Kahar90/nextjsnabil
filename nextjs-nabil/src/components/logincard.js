import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { LoginContext } from "../context";
import { useContext, useEffect } from "react";
import { Paper } from "@mui/material";
import { Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Logincard = () => {
  const { Loginfunc, alertFailLogin } = useContext(LoginContext);
  const router = useRouter();

  return (
    <div>
      <Grid
        container
        spacing={10}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item sx={{ textAlign: "center", margin: "auto" }}>
          <h1>
            Hello There! <br></br>Please Log in
          </h1>
        </Grid>
        <Grid item>
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: "white",
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
                  <TextField
                    sx={{ marginTop: "10px", marginBottom: "10px" }}
                    label="ID"
                    variant="outlined"
                    id="idField"
                    required
                  />

                  <br></br>

                  <TextField
                    sx={{ marginTop: "", marginBottom: "10px" }}
                    label="Password"
                    variant="outlined"
                    id="passwordField"
                    required
                  />
                  <br></br>

                  <Button
                    type="submit"
                    sx={{ marginTop: "10px" }}
                    // onClick = {login}
                  >
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
    Loginfunc(data);
  }
};

export default Logincard;
