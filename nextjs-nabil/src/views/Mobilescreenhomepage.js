import { Grid } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import TableHome from "../components/table";

const Mobilescreenhomepage = () => {
  return (
    <div>
      <TableHome></TableHome>
      <Grid container justifyContent="center">
      <h3>
        <br></br>I'm a mobile page hello!
      </h3>
      </Grid>
    </div>
  );
};
export default Mobilescreenhomepage;
