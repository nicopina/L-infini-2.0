import { useEffect, useState , useContext} from "react";
import { Routes, Route , Navigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Static Components/Footer.jsx";

import OrderPageTest from "../../pages/OrderPageTest.jsx";
import ContactPageTest from "../../pages/ContactPageTest.jsx";
import MenuPack from "../MenuPack/MenuPack";
import MenuDishStateTest from "../../pages/MenuDishStateTest.jsx";
import LoginPage from "../../pages/LoginPage.jsx";
import AssistancePageTest from "../../pages/AssistancePageTest.jsx";

// import RequireAuth from "./components/RequireAuth";

import { DataProvider } from '../../Context/Datacontext.jsx';
import { UserContext } from "../../Context/UserContext";


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
          <Route path="*" element={<Navigate to='/menu'/>}  />
          <Route path="/menu" element={<MenuPack/>} />
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