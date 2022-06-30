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
import LoadingComp from "./LoadingComp";

const TableGames = () => {
  const { isLoading, dataGames, getMoreInfoGames } = useContext(AppContext);
  const loggedout = () => {
    localStorage.removeItem("loggedin");
  };
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
        <Box
          sx={{
            width: "98%",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Games (Home vs Visitor)
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Home Team Score
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Visitor Team Score
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Season
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* each loop displaying data from api fetch in table rows */}
                {dataGames.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.home_team.full_name}{" "}
                      <b>
                        <i>vs</i>
                      </b>{" "}
                      {row.visitor_team.full_name}
                    </TableCell>
                    <TableCell align="right">{row.home_team_score}</TableCell>
                    <TableCell align="right">
                      {row.visitor_team_score}
                    </TableCell>
                    <TableCell align="right">{row.season}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">
                      <PopupModal index={index}></PopupModal>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
};

export default TableGames;
