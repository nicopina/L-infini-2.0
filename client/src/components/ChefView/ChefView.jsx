import { Routes, Route , Navigate} from "react-router-dom";
import MenuPageTest from "../../pages/MenuPageTest";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage";
import DishesPage from "../../pages/DishesPage";
import NotFound from "../NotFound/NotFound";
import Navbar from "../Navbar/Navbar";
import Footer from "../Static Components/Footer";
import LogoutPage from "../../pages/LogoutPage";
import MenuPack from "../MenuPack/MenuPack";
import NotificationsChef from "../Notifications/NotificationsChef";

function ChefView() {
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
