import MenuPageTest from "../../pages/MenuPageTest";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage";
import DishesPage from "../../pages/DishesPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Static Components/Footer";

function WaiterView() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<MenuPageTest />} />
        <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
        <Route path="/platos" element={<DishesPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default WaiterView;
