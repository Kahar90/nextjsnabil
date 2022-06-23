import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";
import { LoginContext } from "../context";
import { useState, createContext, useContext, Suspense } from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red, green, blue } from "@mui/material/colors";
import { Alert } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Logincard = () => {
  const [alert, setAlert] = useState(false);
  const { isAuthenticated, authlogic } = useContext(LoginContext);
  const router = useRouter();

 
  return (
    <div>
      <Grid container spacing={10} sx={{ flexDirection: { xs: "column", md: "row"} }}
      >
        <Grid item sx={{textAlign:"center", margin: "auto"}}>
          <h1>Hello There! <br></br>Please Log in</h1>
        </Grid>
        <Grid item >
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
          {alert && <Alert severity="error">Invalid ID or Password</Alert>}
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
          console.log("masuk");
          authlogic(true);
          localStorage.setItem("loggedin", true);
          router.replace("/homepage");
        } else {
          setAlert(true);
        }
      });
    });
  }
};

export default Logincard;
