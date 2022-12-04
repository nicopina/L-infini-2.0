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
import AssistancesPage from "../../pages/AssistancesPage.jsx";
import ManageTables from "../../pages/ManageTables.jsx";
import DishRegisterPage from "../../pages/DishRegisterPage.jsx";
import Reports from "../../pages/Reports";
import DishReportPage from "./Reports/DishReportPage.jsx";
import SalesReportPage from "./Reports/SalesReportPage.jsx";
import { UserContext } from "../../Context/UserContext.jsx";
import { useEffect } from "react";

function AdminView() {

  const [user , setUser , table , setTable] = useContext(UserContext)

  useEffect (() => {
    setTable(0);
  },[])

  return (
    <DataProvider>
    <div className="App" style={{'width':'100%'}}>
      <Navbar />
      <Routes >
        <Route path="*" element={<Navigate to='/menu'/>} />
        <Route path="/menu" element={<MenuPack/>} />
        <Route path ="/asistencias" element={<AssistancesPage/>}/>
        <Route path="/pedidosActivos" element={<ActiveOrdersPage/>}/>
        <Route path="/platos" element={<DishesPage/>}/>
        <Route path="/usuarios" element={<ManageUsersPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/registroPlatos" element={<DishRegisterPage/>}/>
        <Route path="/mesas" element={<ManageTables/>} />
        <Route path="/reportes" element= {<Reports/>} />
        <Route path="/reportes/platos" element= {<DishReportPage/>} />
        <Route path="/reportes/ventas" element= {<SalesReportPage/>} />

      </Routes>
      <Footer />
    </div>
  </DataProvider>
  );
}

export default AdminView;
