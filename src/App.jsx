import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "../src/pages/About/About"
import Projects from "../src/pages/Projects/Projects"
import Contact from "../src/pages/Contact/Contact"



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