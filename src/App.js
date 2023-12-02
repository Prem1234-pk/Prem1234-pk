import './CSS/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from './Component/Contact';
import Education from './Component/Education';
import Certificate from './Component/Certificate';
import Project from './Component/Project';
import Skills from './Component/Skill';
import Navbar from './Component/Navbar';

function App() {
  return (<>
    <div className='app'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/project' element={<Project />} />
          <Route path='/skill' element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;
