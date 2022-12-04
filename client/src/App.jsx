import { useContext, useEffect, useState } from "react";

import UserView from "./components/UserView/UserView";
import AdminView from "./components/AdminView/AdminView";
import ChefView from "./components/ChefView/ChefView";
import WaiterView from "./components/WaiterView/WaiterView";
import NotFound from "./components/NotFound/NotFound";
import { UserContext } from "./Context/UserContext";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import NoTablePage from "./pages/NoTablePage";

function App() {
  // const user = useContext(UserContext)[0];
  const [seed, setSeed] = useState(0);
  const [user, setUser, table, setTable] = useContext(UserContext);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [user]);

  if (user.role === null) {
    if (table === undefined) {
      return <NoTablePage />;
    }
    // if user is not logged in
    return <UserView />;
  } else if (user.role === 1) {
    // if user is admin
    return <AdminView />;
  } else if (user.role === 2) {
    // if user is chef
    return <ChefView />;
  } else if (user.role === 3) {
    // if user is waiter
    return <WaiterView />;
  }
}

export default App;
