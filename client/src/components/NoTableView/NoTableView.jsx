import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Static Components/Footer";
import LoginPage from "../../pages/LoginPage";
import NoTable from "../NoTable";

function NoTableView() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/newTable/:id" element={<Navigate to="/menu" />} /> */}
        <Route path="/newTable/:id" element={<NoTable />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NoTable/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default NoTableView;
