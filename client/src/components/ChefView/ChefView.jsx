import { Routes, Route , Navigate} from "react-router-dom";
import MenuPageTest from "../../pages/MenuPageTest";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage";
import DishesPage from "../../pages/DishesPage";
import NotFound from "../NotFound/NotFound";
// import Navbar from "../Navbar/Navbar";
import Navbar from "../Navbar/NewNavbar";
import Footer from "../Static Components/Footer";
import LogoutPage from "../../pages/LogoutPage";
import MenuPack from "../MenuPack/MenuPack";
import NotificationsChef from "../Notifications/NotificationsChef";
import {useEffect, useContext} from 'react';
import {UserContext} from '../../Context/UserContext.jsx';

function ChefView() {
  const [user , setUser , table , setTable] = useContext(UserContext)

  useEffect (() => {
    setTable(0);
  },[])

  return (
    <div>
      <Navbar/>
      <NotificationsChef/>
      <Routes>
        <Route path= "/menu" element={<MenuPack />} />
        <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
        <Route path="/platos" element={<DishesPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<Navigate to='/menu'/>}  />
      </Routes>
      <Footer/>
    </div>
  );
}

export default ChefView;
