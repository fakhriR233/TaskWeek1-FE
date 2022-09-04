import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ModalRegister from "./Components/Modal";
import ModalLogin from "./Components/ModalLogin";
import TopNavbarAdmin from "./Components/Utility/TopNavAdmin";
import AdminTransaction from "./Pages/AdminTransaction";
import TopNavbar from "./Components/Utility/TopNavbar";
import AdminAddMovies from "./Pages/AdminAddMovies";
import HomeScreen from "./Components/Home/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/tvshows" exact element={<HomeScreen />} />
          <Route path="/movies" exact element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
