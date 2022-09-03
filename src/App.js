import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import ModalRegister from "./Components/Modal";
// import ModalLogin from "./Components/ModalLogin";
// import TopNavbar from "./Components/Utility/TopNavbar";
// import CarouselHome from "./Components/Home/carouselHome";
// import Movies from "./Components/Home/Movies";
import HomePage from "./Components/Home/HomePage";
import TVShows from "./Components/TVShows/TVShows";
import Movies from "./Components/Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./Components/Profil/Profil";
import Payment from "./Components/Payment/Payment";
import ListTransactions from "./Components/ListTransactions/ListTransactions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/listtransactions" element={<ListTransactions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
