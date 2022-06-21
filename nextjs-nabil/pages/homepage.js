import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function homepage() {
  return (
    <Box
      sx={{
        width: "98%",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      >
        <Button variant="outlined" href="/">
          Log out
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Brownie</TableCell>
              <TableCell align="right">250</TableCell>
              <TableCell align="right">20</TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="right">6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cheetos</TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">25</TableCell>
              <TableCell align="right">30</TableCell>
              <TableCell align="right">10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Apple</TableCell>
              <TableCell align="right">25</TableCell>
              <TableCell align="right">10</TableCell>
              <TableCell align="right">40</TableCell>
              <TableCell align="right">5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
