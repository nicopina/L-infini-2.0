import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage.jsx";
import DishesPage from "../../pages/DishesPage.jsx";
import ManageUsersPage from "../../pages/ManageUsersPage";
import NotFound from "../NotFound/NotFound.jsx";
import Footer from "../Static Components/Footer.jsx";
// import Navbar from "../Navbar/Navbar.jsx";
import Navbar from "../Navbar/NewNavbar.jsx";
import LogoutPage from "../../pages/LogoutPage.jsx";
import { DataProvider } from '../../Context/Datacontext.jsx';
import MenuPack from "../MenuPack/MenuPack.jsx";
import ManageTables from "../../pages/ManageTables.jsx";
import DishRegisterPage from "../../pages/DishRegisterPage.jsx";
import Reports from "../../pages/Reports";
import DishReportPage from "./Reports/DishReportPage.jsx";
import SalesReportPage from "./Reports/SalesReportPage.jsx";
import { UserContext } from "../../Context/UserContext.jsx";
import { useEffect } from "react";
import DishCategoryRegisterPage from "../../pages/DishCategoryRegisterPage.jsx";
import AssistancesPageEmployee from "../../pages/AssistancesPageEmployee.jsx";
import DownloadsPage from "./Reports/DownloadsPage.jsx";
import OrdersPendingPaymentPage from "../../pages/OrdersPendingPaymentPage.jsx";
import ModifyDish from "../ManageDishes/ModifyDish.jsx";
import DishCategories from "../ManageDishCategories/DishCategories.jsx";
import SalesRecord from "../Sales Record/SalesRecord.jsx";

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
        <Route path ="/asistencias" element={<AssistancesPageEmployee/>}/>
        <Route path="/pedidosActivos" element={<ActiveOrdersPage/>}/>
        <Route path="/pedidosPendientes" element={<OrdersPendingPaymentPage />} />
        <Route path="/platos" element={<DishesPage/>}/>
        <Route path="/modificarPlatos" element={<ModifyDish/>} />
        <Route path="/usuarios" element={<ManageUsersPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/registroPlatos" element={<DishRegisterPage/>}/>
        <Route path="/mesas" element={<ManageTables/>} />
        <Route path="/reportes" element= {<Reports/>} />
        <Route path="/reportes/platos" element= {<DishReportPage/>} />
        <Route path="/registroCategoriaPlatos" element={<DishCategoryRegisterPage/>} />
        <Route path="/modificarCategoriaPlatos" element = {<DishCategories/>} />
        <Route path="/reportes/ventas" element= {<SalesReportPage/>} />
        <Route path= "/reportes/descargas" element={<DownloadsPage/>}/>
        <Route path="/historialVentas" element={<SalesRecord/>}/>
      </Routes>
      <Footer />
    </div>
  </DataProvider>
  );
}

export default AdminView;
