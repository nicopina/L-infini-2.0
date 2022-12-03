import MenuPageTest from "../../pages/MenuPageTest";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage";
import DishesPage from "../../pages/DishesPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Static Components/Footer";
import { Routes, Route , Navigate } from "react-router-dom";
import LogoutPage from "../../pages/LogoutPage";
import NotFound from "../NotFound/NotFound";
import MenuPack from "../MenuPack/MenuPack";
import Notifications from "../Notifications/Notifications";

function WaiterView() {
  return ( 
    <div>
      <Navbar />
      <Notifications />
      <Routes>
        <Route path="/menu" element={<MenuPack />} />
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
