import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"

function App(){
  return(
      <>
        <BrowserRouter>       
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/projetos" element={<Projects />}/>
            <Route path="/contato" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App