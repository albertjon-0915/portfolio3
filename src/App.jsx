import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./styling/App.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Error from "./pages/error";

function App() {
     return (
          <Router>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="*" element={<Error />} />
               </Routes>
          </Router>
     );
}

export default App;
