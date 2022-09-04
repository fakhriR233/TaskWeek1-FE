import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminAddMovies from "./Pages/AdminAddMovies";
import HomeScreen from "./Components/Home/HomeScreen";
import Profil from "./Components/Profil/Profil";
import Payment from "./Components/Payment/Payment";
import ListTransactions from "./Components/ListTransactions/ListTransactions";
import TVShows from "./Components/TVShows/TVShows";
import Movies from "./Components/Movies/Movies";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/tvshows" exact element={<TVShows />} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/listtransactions" element={<ListTransactions />} />
          <Route path="/addmovies" element={<AdminAddMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
