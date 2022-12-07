import { useEffect, useState, useContext } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
// import Navbar from "../Navbar/Navbar.jsx";
import NavBar from "../Navbar/NewNavbar.jsx";
import Footer from "../Static Components/Footer.jsx";

import OrderPageTest from "../../pages/OrderPageTest.jsx";
import ContactPageTest from "../../pages/ContactPageTest.jsx";
import MenuPack from "../MenuPack/MenuPack";
import LoginPage from "../../pages/LoginPage.jsx";
import Notable from "../NoTable/NoTable.jsx";

// import RequireAuth from "./components/RequireAuth";

import { DataProvider } from "../../Context/Datacontext.jsx";
import { UserContext } from "../../Context/UserContext";
import OrderState from "../OrderState/OrderState.jsx";
import NewAllocatedTable from "../NewAllocatedTable/NewAllocatedTable.jsx";
import AssistancePageUser from "../../pages/AssistancePageUser.jsx";

function UserView() {
  const [user, setUser, table, setTable] = useContext(UserContext);
  console.log("UserView");
  return (
    <DataProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/newTable/:id" element={<NewAllocatedTable/>} />
          <Route path="*" element={<Navigate to="/menu" />} />
          <Route path="/menu" element={<MenuPack />} />
          <Route path="/pedidos" element={<OrderState />} />
          <Route path="/asistencia" element={<AssistancePageUser />} />
          <Route path="/contacto" element={<ContactPageTest />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Footer />
      </div>
    </DataProvider>
  );
}

export default UserView;
