import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Error from "./pages/error/error";
import './style/global.scss'
import About from "./pages/about/about";
import PlaceHome from "./pages/placeToVisit/placeHome";
import CategoryPlace from "./pages/placeToVisit/categoryPlace";
import PlaceDetails from "./pages/placeToVisit/placeDetails";
import ExperienceHome from "./pages/experience/experienceHome";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/place-to-visit" element={<PlaceHome />} />
        <Route path="/place-to-visit/:category" element={<CategoryPlace />} />
        <Route path="/place-to-visit/:category/:id" element={<PlaceDetails />} />
        <Route path="/experience" element={<ExperienceHome />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
