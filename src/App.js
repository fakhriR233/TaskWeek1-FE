import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ModalRegister from "./Components/Modal";
import ModalLogin from "./Components/ModalLogin";
import TopNavbar from "./Components/Utility/TopNavbar";
import CarouselHome from "./Components/Home/carouselHome";
import Movies from "./Components/Home/Movies";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <CarouselHome />
      <Movies />
    </div>
  );
}

export default App;
