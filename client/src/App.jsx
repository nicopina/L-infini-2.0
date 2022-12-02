import { useContext, useEffect, useState } from "react";

import UserView from "./components/UserView/UserView";
import AdminView from "./components/AdminView/AdminView";
import ChefView from "./components/ChefView/ChefView";
import WaiterView from "./components/WaiterView/WaiterView";
import NotFound from "./components/NotFound/NotFound";
import { UserContext } from "./Context/UserContext";
import { Routes , Route } from "react-router-dom";

function App() {
  const user = useContext(UserContext)[0];
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [user]);


  if (user.role === null) { // if user is not logged in
    return <UserView />;x
  } else if (user.role === 1) { // if user is admin
    return <AdminView />;
  } else if (user.role === 2) { // if user is chef
    return <ChefView />;
  } else if (user.role === 3) { // if user is waiter
    return <WaiterView />;
  }
}

export default App;
