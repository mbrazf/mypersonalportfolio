// Aqui importamos os recursos do react router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/layout/Nav/Navbar'
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About"


function App() {
  
  return (
    <div>
      <Router>
      <Navbar />
          <Routes>
          <Route  path="/" element={<Home />}>
	          {" "}
	        </Route>
          <Route  path="/sobre" element={<About />}>
	          {" "}
	        </Route>
          <Route  path="/projetos" element={<Project />}>
	          {" "}
	        </Route>
          <Route  path="/skills" element={<Skills />}>
	          {" "}
	        </Route>
          <Route  path="/contato" element={<Contact />}>
	          {" "}
	        </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
