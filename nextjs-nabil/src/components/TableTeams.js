import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import LoadingComp from "./LoadingComp";

const TableTeams = () => {
  const { isLoading, dataTeams } = useContext(AppContext);

  return (
    <div>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ visibility: isLoading ? "visible" : "hidden" }}
        >
          <LoadingComp></LoadingComp>
        </Box>
      ) : (
        <div></div>
      )}
      <Box
        sx={{
          visibility: isLoading ? "hidden" : "visible",
          width: "98%",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Teams</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  City
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Conference
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Division
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* each loop displaying data from api fetch in table rows */}
              {dataTeams.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.full_name}{" "}
                  </TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.conference}</TableCell>
                  <TableCell align="right">{row.division}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TableTeams;
