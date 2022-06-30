import TableHome from "../components/table";
import * as React from "react";
import CompBottomNavigation from "../components/CompBottomNavigation";


const ViewHomepage = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <TableHome></TableHome>
      <CompBottomNavigation></CompBottomNavigation>
    </div>
  );
};
export default ViewHomepage;
