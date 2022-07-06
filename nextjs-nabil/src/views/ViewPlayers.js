import * as React from "react";
import CompBottomNavigation from "../components/CompBottomNavigation";
import TablePlayers from "../components/TablePlayers";

const ViewPlayers = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      {/* <TableGames></TableGames> */}
      <TablePlayers></TablePlayers>
      <CompBottomNavigation></CompBottomNavigation>
    </div>
  );
};
export default ViewPlayers;
