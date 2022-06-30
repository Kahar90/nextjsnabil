import * as React from "react";
import CompBottomNavigation from "../components/CompBottomNavigation";
import TableGames from "../components/TableGames";
import TableTeams from "../components/TableTeams";


const ViewTeams = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      {/* <TableGames></TableGames> */}
      <TableTeams></TableTeams>
      <CompBottomNavigation></CompBottomNavigation>
    </div>
  );
};
export default ViewTeams;
