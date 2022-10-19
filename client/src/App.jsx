import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/NavBar.jsx";
import HomePageTest from "./pages/HomePageTest.jsx";
import MenuPageTest from "./pages/MenuPageTest.jsx";
import AssistancePageTest from "./pages/AssistancePageTest.jsx";
import OrderPageTest from "./pages/OrderPageTest.jsx";
import ContactPageTest from "./pages/ContactPageTest.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1>Hector Juan Soza Pollman</h1>
      <img
        src="https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg"
        alt="300x377"
      />
      <Routes>
        <Route path="/" element={<HomePageTest />} />
        <Route path="/menu" element={<MenuPageTest />} />
        <Route path="/asistencia" element={<AssistancePageTest />} />
        <Route path="/pedidos" element={<OrderPageTest />} />
        <Route path="/contacto" element={<ContactPageTest />} />
      </Routes>
    </div>
  );
}

export default App;
