import React from "react";
import Navbar from "./Layout/Navbar";
// import Footer from "./Layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

import About from "./Components/About";
// import Projects from "./Components/Projects";
import Project from "./Components/Project";

import Notes from "./Components/Notes";

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home/>} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Notes" element={<Notes />} />
            <Route path="About" element={<About />} />
            {/* <Route path="Projects" element={<Projects />} /> */}
            <Route path="Project" element={<Project />} />

            

          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
