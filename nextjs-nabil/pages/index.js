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
                <TextField label="ID" variant="outlined" id="idField" />

                <br></br>
                <br></br>
                <TextField
                  label="Password"
                  variant="outlined"
                  id="passwordField"
                />
              </div>
            </div>
            <br></br>

            <Button variant="outlined" onClick={login}>
              Login
            </Button>
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
