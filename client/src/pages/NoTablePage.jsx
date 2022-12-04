import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Static Components/Footer";
import LoginPage from "./LoginPage";
import NoTable from "../components/NoTable/NoTable";

function NoTablePage() {
  return (
    <div className="App" style={{'width':'100%'}}>
      <Navbar />
      <Routes>
        {/* <Route path="/newTable/:id" element={<Navigate to="/menu" />} /> */}
        <Route path="/newTable/:id" element={<NoTable />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NoTable/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default NoTablePage;
