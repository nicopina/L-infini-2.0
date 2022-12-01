import { useEffect, useState , useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Static Components/Footer.jsx";

import HomePageTest from "../../pages/HomePageTest.jsx";
import MenuPageTest from "../../pages/MenuPageTest.jsx";
import AssistancePageTest from "../../pages/AssistancePageTest.jsx";
import OrderPageTest from "../../pages/OrderPageTest.jsx";
import ContactPageTest from "../../pages/ContactPageTest.jsx";
import ActiveOrdersPage from "../../pages/ActiveOrdersPage.jsx";
import MenuPack from "../MenuPack/MenuPack";
import MenuDishStateTest from "../../pages/MenuDishStateTest.jsx";
import DishesPage from "../../pages/DishesPage.jsx";
import LoginPage from "../../pages/LoginPage.jsx";
import ManageUsersPage from "../../pages/ManageUsersPage";

// import RequireAuth from "./components/RequireAuth";

import { DataProvider } from '../../Context/Datacontext.jsx';
import { Cart } from "../ShoppingCart/Cart";
import RegisterPage from "../../pages/RegisterPagee";

import { UserContext } from "../../Context/UserContext";
import NotFound from "../NotFound/NotFound.jsx";


function UserView() {
  const user = useContext(UserContext);

  //   return (
  //       <div> User View </div>
  // );
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
          <Route path="/menu" element={<MenuPageTest />} />
          <Route path="/asistencia" element={<AssistancePageTest />} />
          <Route path="/pedidos" element={<OrderPageTest />} />
          <Route path="/contacto" element={<ContactPageTest />} />
          <Route path="/state" element={<MenuDishStateTest />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
  
        <Footer />
      </div>
    </DataProvider>
  );
  
}

export default UserView