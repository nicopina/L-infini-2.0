import MenuPageTest from "../../pages/MenuPageTest";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage";
import DishesPage from "../../pages/DishesPage";
// import Navbar from "../Navbar/Navbar";
import Navbar from "../Navbar/NewNavbar";
import Footer from "../Static Components/Footer";
import { Routes, Route , Navigate } from "react-router-dom";
import LogoutPage from "../../pages/LogoutPage";
import NotFound from "../NotFound/NotFound";
import MenuPack from "../MenuPack/MenuPack";
import Notifications from "../Notifications/Notifications";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext.jsx";
import AssistancesPageEmployee from "../../pages/AssistancesPageEmployee";

function WaiterView() {
  const [user , setUser , table , setTable] = useContext(UserContext)

  useEffect (() => {
    setTable(0);
  },[])

  return ( 
    <div>
      <Navbar />
      <Notifications />
      <Routes>
        <Route path="/menu" element={<MenuPack />} />
        <Route path="/asistencias" element={<AssistancesPageEmployee />} />
        <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
        <Route path="/platos" element={<DishesPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<Navigate to='/menu'/>}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default WaiterView;
