import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About.js';
import Navbar from './Pages/Navbar.js';
import Home from './Pages/Home.js';
import Footer from './Pages/Footer';
import Projects from './Pages/Projects';


function App() {
  return (
     <Router>
     <div>
            <Navbar/>
             <Routes> 
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/projects" element={<Projects />} />
                  
            </Routes>
        <Footer/>
     </div>
    </Router>
    // <div className="App">
    //  <Navbar/>
    //  {/* <Home/> */}
    //  {/* <About/> */}
    //  <Projects/>
    //  {/* <ProjectCard/> */}
    //  <Footer/>
    // </div>
  );
}

export default App;
