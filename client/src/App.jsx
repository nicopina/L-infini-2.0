import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Static Components/NavBar.jsx";
import HomePageTest from "./pages/HomePageTest.jsx";
import MenuPageTest from "./pages/MenuPageTest.jsx";
import AssistancePageTest from "./pages/AssistancePageTest.jsx";
import OrderPageTest from "./pages/OrderPageTest.jsx";
import ContactPageTest from "./pages/ContactPageTest.jsx";
import ActiveOrdersPage from "./pages/ActiveOrdersPage.jsx";
import Footer from "./components/Static Components/Footer";
import { DataProvider } from "./Context/DataContext";
import MenuPack from "./Components/MenuPack/MenuPack";
import {Cart} from "./Components/ShoppingCart/Cart";
import MenuDishStateTest from "./pages/MenuDishStateTest.jsx";

function App() {
  const [count, setCount] = useState(0);
  const mesa = "1";
  return (
    <DataProvider>
      <div className="App">
        <Navbar />

        <h1>Hector Juan Soza Pollman</h1>
        <img
          src="https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg"
          alt="300x377"
        />
        <Cart />
        <Routes>
          <Route path="/" element={<HomePageTest />} />
          <Route path={`/menu`} element={<MenuPack />} />
          <Route path="/asistencia" element={<AssistancePageTest />} />
          <Route path="/pedidos" element={<OrderPageTest />} />
          <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
          <Route path="/contacto" element={<ContactPageTest />} />
          <Route path="/state" element={<MenuDishStateTest />} />
        </Routes>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
