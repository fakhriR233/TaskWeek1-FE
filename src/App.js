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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
