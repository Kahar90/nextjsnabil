import * as React from "react";
import CompBottomNavigation from "../components/CompBottomNavigation";
import TableGames from "../components/TableGames";


const ViewGames = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <TableGames></TableGames>
      <CompBottomNavigation></CompBottomNavigation>
    </div>
  );
};
export default ViewGames;
