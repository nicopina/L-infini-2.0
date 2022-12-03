import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ActiveOrdersPage from "../../pages/ActiveOrdersPage.jsx";
import DishesPage from "../../pages/DishesPage.jsx";
import ManageUsersPage from "../../pages/ManageUsersPage";
import NotFound from "../NotFound/NotFound.jsx";
import Footer from "../Static Components/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import LogoutPage from "../../pages/LogoutPage.jsx";

import { DataProvider } from '../../Context/Datacontext.jsx';
import MenuPack from "../MenuPack/MenuPack.jsx";
import AssistancePageTest from "../../pages/AssistancePageTest.jsx";
import ManageTables from "../../pages/ManageTables.jsx";
import DishRegisterPage from "../../pages/DishRegisterPage.jsx";
import { UserContext } from "../../Context/UserContext.jsx";
import { useEffect } from "react";

function AdminView() {

  const [user , setUser , table , setTable] = useContext(UserContext)

  useEffect (() => {
    setTable(0);
  },[])

  return (
    <DataProvider>
    <div className="App">
      <Navbar />
      <h1>Hector Juan Soza Pollman</h1>
      <img
        src="https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg"
        alt="300x377"
      />
      <Routes >
        <Route path="*" element={<Navigate to='/menu'/>} />
        <Route path="/menu" element={<MenuPack/>} />

        <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
        <Route path ="/asistencias" element={<AssistancePageTest/>}/>

        <Route path="/platos" element={<DishesPage/>}/>
        <Route path="/usuarios" element={<ManageUsersPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/registroPlatos" element={<DishRegisterPage/>}/>
        <Route path="/mesas" element={<ManageTables/>} />
      </Routes>
      <Footer />
    </div>
  </DataProvider>
  );
}

export default AdminView;
