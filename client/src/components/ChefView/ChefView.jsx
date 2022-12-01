import { Routes, Route } from "react-router-dom";
import MenuPageTest from "../../pages/MenuPageTest";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage";
import DishesPage from "../../pages/DishesPage";
import NotFound from "../NotFound/NotFound";
import Navbar from "../Navbar/Navbar";
import Footer from "../Static Components/Footer";
import LogoutPage from "../../pages/LogoutPage";

function ChefView() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path= "/menu" element={<MenuPageTest />} />
        <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
        <Route path="/platos" element={<DishesPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default ChefView;
