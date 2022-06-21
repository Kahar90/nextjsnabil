import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Alert } from "@mui/material";

export default function Home() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
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
            <div>
              <h1> Login </h1>
              <div>
                <form onSubmit={login}>
                  <TextField sx={{marginTop:"10px", marginBottom: "10px"}}
                    label="ID"
                    variant="outlined"
                    id="idField"
                    required
                  />

                  <br></br>

                  <TextField sx={{marginTop:"", marginBottom: "10px"}}
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
           
          </div>
          <br></br>
          {alert && <Alert severity="error">Invalid ID or Password</Alert>}
          <p>
            login: nabil <br></br>
            password: nabil
          </p>
        </Paper>
      </Box>
    </div>
  );

  function login(params) {
    event.preventDefault();
    let idField = document.getElementById("idField").value;
    let passwordField = document.getElementById("passwordField").value;
    let data = { id: idField, password: passwordField };

    // validation

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log(res.status);
      res.json().then((data) => {
        // console.log(data);
        if (data.message === "login success") {
          // login success
          window.location.href = "/homepage";
        } else {
          // login failed
          setAlert(true);
        }
      });
    });
  }
}
