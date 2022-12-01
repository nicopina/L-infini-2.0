import React from "react";
import { Routes, Route } from "react-router-dom";

import ActiveOrdersPage from "../../pages/ActiveOrdersPage.jsx";
import DishesPage from "../../pages/DishesPage.jsx";
import ManageUsersPage from "../../pages/ManageUsersPage";
import NotFound from "../NotFound/NotFound.jsx";
import Footer from "../Static Components/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import LogoutPage from "../../pages/LogoutPage.jsx";

import { DataProvider } from '../../Context/Datacontext.jsx';
import DishRegisterPage from "../../pages/DishRegisterPage.jsx";

function AdminView() {
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
        <Route path="*" element={<NotFound/>} />
        <Route path="/pedidosActivos" element={<ActiveOrdersPage />} />
        <Route path="/platos" element={<DishesPage/>}/>
        <Route path="/usuarios" element={<ManageUsersPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/registroPlatos" element={<DishRegisterPage/>}/>
      </Routes>

      <Footer />
    </div>
  </DataProvider>
  );
}

export default AdminView;