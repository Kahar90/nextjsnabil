import { useContext } from "react";
import { AppContext } from "../context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import PopupModal from "./PopupModal";
import { Button } from "@mui/material";

const TablePlayers = () => {
  const { isLoading, dataPlayers } = useContext(AppContext);

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
                <TableCell sx={{ fontWeight: "bold" }}>Player Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Team
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* each loop displaying data from api fetch in table rows */}
              {dataPlayers.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.first_name}{" "} {row.last_name}
                  </TableCell>
                  <TableCell align="right">{row.team.full_name}</TableCell>
                  <TableCell align="right">{row.position}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TablePlayers;
