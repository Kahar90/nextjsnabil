import TableHome from "../src/components/table";

import Mobilescreenhomepage from "../src/views/Mobilescreenhomepage";
import Desktopscreenhomepage from "../src/views/Desktopscreenhomepage";
import { useContext } from "react";
import { LoginContext } from "../src/context";



export default function homepage() {
  
  const {isTabletOrMobile} = useContext(LoginContext)

  //return <TableHome></TableHome>;
  return <div>
    {isTabletOrMobile ? <Mobilescreenhomepage /> : <Desktopscreenhomepage />}
  </div>
}
