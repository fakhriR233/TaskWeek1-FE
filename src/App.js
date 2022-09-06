import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminAddMovies from "./Pages/AdminAddMovies";
import HomeScreen from "./Components/Home/HomeScreen";
import Profil from "./Components/Profil/Profil";
import Payment from "./Components/Payment/Payment";
import ListTransactions from "./Components/ListTransactions/ListTransactions";
import TVShows from "./Components/TVShows/TVShows";
import Movies from "./Components/Movies/Movies";
import MoviesDetails from "./Components/Details/MoviesDetails";
import AdminTransaction from "./Pages/AdminTransaction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddListPage from "./Components/AddListPage/AddListPage";
import AddEpisode from "./Components/AddEpisode/AddEpisode";
import AdminDetails from "./Components/Details/MoviesDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/tvshows" exact element={<TVShows />} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/moviesdetails" exact element={<MoviesDetails />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/listtransactions" element={<ListTransactions />} />
          <Route path="/addmovies" element={<AdminAddMovies />} />
          <Route path="/admintransaction" element={<AdminTransaction />} />
          <Route path="/addlistpage" element={<AddListPage />} />
          <Route path="/addepisode" element={<AddEpisode />} />
          <Route path="/admindetail" element={<AdminDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
