import { useState } from "react";
import "./styling/App.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
     return (
          <>
               <Navbar />
               <Home />
          </>
     );
}

export default App;
