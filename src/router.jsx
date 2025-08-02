import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Landingpage from './pages/LandingPage/Landingpage'
import DetailsProject from "./pages/DetailsProject/DetailsProject"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projetos/:id" element={<DetailsProject />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
