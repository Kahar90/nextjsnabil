import { Grid } from "@mui/material";
import React from "react";
import TableHome from "../components/table";

const MobileViewHomepage = () => {
  return (
    <div>
      <TableHome></TableHome>
      <Grid container justifyContent="center" gap={2}>
        <h3>I'm a mobile page hello!</h3>
        <h3>And can show custom UI for it too!</h3>
      </Grid>
    </div>
  );
};
export default MobileViewHomepage;
