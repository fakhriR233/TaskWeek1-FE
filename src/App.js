import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ModalRegister from "./Components/Modal";
import ModalLogin from "./Components/ModalLogin";
import TopNavbarAdmin from "./Components/Utility/TopNavAdmin";
import AdminTransaction from "./Pages/AdminTransaction";
import TopNavbar from "./Components/Utility/TopNavbar";
import AdminAddMovies from "./Pages/AdminAddMovies";

function App() {
  return (
    <div className="">
      <TopNavbarAdmin />
      <AdminAddMovies />
    </div>
  );
}

export default App;
